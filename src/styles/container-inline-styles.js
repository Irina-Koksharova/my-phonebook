const mainContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  width: '950px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: '50px',
};

const subContainer = {
  position: 'relative',
  width: '400px',
  height: '670px',
  padding: '30px 30px',
  backgroundColor: 'black',
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  borderRadius: '10px',
  overflow: 'hidden',
};

const popUpContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 50%)',
  width: '100%',
  height: '100%',
  padding: '30px 30px',
  backgroundColor: 'black',
  borderRadius: '10px',
  transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const isShown = {
  transform: 'translate(-50%, -50%)',
};

export { mainContainer, subContainer, popUpContainer, isShown };
