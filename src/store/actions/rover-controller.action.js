const ROVER_API = 'http://commandrover.herokuapp.com/api/rover';


export const moveRover = async (direction) => {

  const url = ROVER_API + '/move/' + direction;
  const requestData = {
    method: 'POST'
  };

  const response = await fetch(url, requestData)
    .then(res => res.json())
    .then(response => response)
    .catch((err) => {
      console.log('moveRover error', err);
      alert('error occured!')
    });

  if (response && response.success) return response.data;

  return null;
};
export const turnRover = async (direction) => {

  const url = ROVER_API + '/turn/' + direction;
  const requestData = {
    method: 'POST'
  };

  const response = await fetch(url, requestData)
    .then(res => res.json())
    .then(response => response)
    .catch((err) => {
      console.log('turnRover error', err);
      alert('error occured!')
    });

  if (response && response.success) return response.data;

  return null;
};
export const stopRover = async () => {

  const url = ROVER_API +'/stop';
  const requestData = {
    method: 'POST'
  };

  const response = await fetch(url, requestData)
    .then(res => res.json())
    .then(response => response)
    .catch((err) => {
      console.log('stopRover error', err);
      alert('error occured!')
    });

  if (response && response.success) return response.data;

  return null;
};

export const getRoverData = async () => {

  const url = ROVER_API;
  const requestData = {
    // method: 'GET'
  };

  const response = await fetch(url, requestData)
    .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch((err) => {
      console.log('getRoverData error', err);
      alert('error occured!')
    });

  if (response && response.success) return response.data;

  return null;
};

export const SetInputs = async (xvalue,yvalue) => {

  const url = ROVER_API +'/inputs' ;
  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({ xvalue,yvalue})
  };

  const response = await fetch(url, requestData)
    .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch((err) => {
      console.log('Inputs error', err);
      alert('error occured!')
    });

  if (response && response.success) return response.data;

  return null;
};