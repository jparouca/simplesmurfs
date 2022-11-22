import {ImageContainer, SuccessContainer} from "../styles/pages/success";
import Link from "next/link";
import {GetServerSideProps} from "next";
import Image from "next/image";

import {stripe} from "../lib/stripe";
import Stripe from "stripe";

import teemo from "../../src/assets/smurfs/teemo_by_markef-d9fksaw.png";
import Head from "next/head";
interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product } : SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra finalizada | Simple Smurfs</title>
      </Head>
      <SuccessContainer>
        <h1>Compra realizada com sucesso!</h1>

        <ImageContainer>
          <Image src={teemo} width={120} height={110} alt="" />
        </ImageContainer>

        <p>As informações de login foram enviadas ao email cadastrado.</p>

        <Link href="/">
         Voltar a loja.
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id){
    return{
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}