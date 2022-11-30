import { styled } from "../index";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  width: '100%',

  borderRadius: 8,
  borderColor: 'white',
  borderStyle: 'solid',
  borderWidth: '2px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    opacity: 0.8,
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    backgroundImage: 'linear-gradient(90deg, #eab308 0%, #ec4899 100%)',

    marginTop: 'auto',
    padding: '1.25rem',

    fontSize: '$md',
    color: '$white',
    fontWeight: 'bold',

    cursor: 'pointer',

    borderRadius: 8,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: '2px',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})
