import { styled } from '..';

export const SuccessContainer = styled('main', {
  height: 656,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: 520,
    marginTop: '2rem',
    textAlign: 'center',

    lineHeight: 1.4,
    fontSize: '$xl',
    color: '$gray300',
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    }
  },
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 8,
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover'
  }
})
