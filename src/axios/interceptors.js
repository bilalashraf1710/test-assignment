export const requestHandler = (request) => {
  return request;
};

export const successResponseHandler = (response) => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = (error) => {
  return Promise.reject(error);
};
