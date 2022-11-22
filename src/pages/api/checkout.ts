import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  //Lidar caso tentem acessar com um GET direto.
  if (req.method != 'POST') {
    return res.status(405).json({error: 'Method not Allowed'})
  }

  //Lidar com precos vazios.
   if (!priceId) {
     return res.status(400).json({error: 'Preço não encontrado.'})
   }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}