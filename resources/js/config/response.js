export const is400 = err => {
  return isErrorWithResponseAndStatus(err) && 400 === err.response.status;
};

export const is401 = err => {
  return isErrorWithResponseAndStatus(err) && 401 === err.response.status;
};

export const is403 = err => {
  return isErrorWithResponseAndStatus(err) && 403 === err.response.status;
};

export const is422 = err => {
  return isErrorWithResponseAndStatus(err) && 422 === err.response.status;
};

const isErrorWithResponseAndStatus = err => {
  return err.response && err.response.status;
};