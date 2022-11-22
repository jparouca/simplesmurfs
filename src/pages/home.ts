import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((110vw - 1180px) / 2))',
  minHeight:  660,
  
  marginLeft: 'auto',
  
});


export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #fe3e28 100%)',
  borderRadius: 8,
  minWidth: 560,
  position: 'relative',

  overflow: 'hidden',

  cursor: 'pointer',

  img: {
    objectFit: 'cover',
    
  },

  footer:{
    position: 'absolute',

    padding: '2rem',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,

    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    transform: 'translateY(100%)',

    strong: {
      fontSize: '$md',
      color: '$gray100',
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: 'white',
    },

  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  },
});