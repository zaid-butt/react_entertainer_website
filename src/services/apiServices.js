import axios from 'axios';

const nodeApi = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  transformResponse: [function (data) {
    const resp = JSON.parse(data)
    const decoded = atob(resp)
    data = JSON.parse(decoded)
    return data;
  }],
  headers: {
    __location_id: 1,
    common: {
      Accept: 'text/plain, application/json'
    }
  }
});

const pythonApi = axios.create({
  baseURL: process.env.REACT_APP_PYTHONE_URL,
  headers: {
    common: {
      Accept: 'text/plain, application/json'
    }
  }
});
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfdG9rZW4iOiIyNGZlOThiNC05ZjFjLTRjYjgtOGFhNC0zMWY1YWMwNmMyNmIiLCJzZXNzaW9uX3Rva2VuIjoiIiwiY29tcGFueSI6InJ3ZCIsIndsY29tcGFueSI6InJ3ZCJ9.o4pqEXxRSbSJDiMGqKddfmSYUDwnmBv7P021TADczXI";
pythonApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;


const pythonSearchApi = axios.create({
  baseURL: process.env.REACT_APP_PYTHONE_SEARCH_URL,
  transformResponse: [function (data) {
    const decoded = atob(data)
    data = JSON.parse(decoded)
    return data;
  }],
  headers: {
    common: {
      ContentType: 'application/json',
      Accept: 'text/plain, application/json'
    }
  }
});
const auth_kesy = "Basic ZW50ZXJ0YWluZXI6SjJRZFdNSDY0ZHNRM1JYeWluRDQ1RERzc3cwMzY=";
pythonSearchApi.defaults.headers.common['Authorization'] = `${auth_kesy}`;



export { nodeApi, pythonApi, pythonSearchApi };