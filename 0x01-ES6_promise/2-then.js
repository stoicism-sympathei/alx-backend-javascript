function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      console.error('Promise rejected');
      return new Error('Promise rejected');
    })
    .then(result => {
      console.log('Got a response from the API');
      return result;
    });
}

export default handleResponseFromAPI;