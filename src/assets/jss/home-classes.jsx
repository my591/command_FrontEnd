const styles = {

  controllerBtn: {
    position: 'relative',
    padding: '5px',
    margin: '30px auto',
    background: '#000',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    transition: 'all 0.2s linear',
    '&:after': {
      content: '""',
      position: 'absolute',
      margin: 20,
      // left: '17px',
      zIndex: 11,
      display: 'block',
      width: '25px',
      height: '25px',
      borderTop: '2px solid #fff',
      borderLeft: '2px solid #fff',
    }
  },
  btnUp: {
    top: 20,
    transform: 'rotate(45deg)',
  },
  btnDown: {
    top: 10,
    transform: 'rotate(225deg)',
  },
  btnLeft: {
    top: 20,
    transform: 'rotate(-45deg)',
  },
  btnRight: {
    top: 20,
    transform: 'rotate(135deg)',
  },

  btn: {
    cursor: 'pointer',
    backgroundColor: 'Grey !important',
    color: 'White !important'
    // '&:hover': {
    //   backgroundColor: 'red'
    // }
  },
};

export default styles;