function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = {
        status: 200,
        body: 'Some data from the API',
      };
      resolve(response);
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;