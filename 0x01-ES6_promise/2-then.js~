function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => new Error())
    .then(result => {
      console.log('Got a response from the API');
      return result;
    });
}

export default handleResponseFromAPI;