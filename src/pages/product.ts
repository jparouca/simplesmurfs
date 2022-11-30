import { styled } from '../styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',

  gap: '6rem',
  maxWidth: '1280',
  margin: '0 auto',
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 720,
  height: 720,
  padding: '0.25rem',

  background: 'linear-gradient(180deg, #1ea483 0%, #fe3e28 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2l',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2l',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: 's',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    backgroundColor: '$green500',

    marginTop: 'auto',
    padding: '1.25rem',

    border: 0,
    borderRadius: 8,

    color: '$white',
    fontWeight: 'bold',
    fontSize: '$md',

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
