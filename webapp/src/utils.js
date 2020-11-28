import axios from 'axios';

let API = 'http://localhost:8080/api';
if (process.env.NODE_ENV === 'production') {
  API = '/api';
}

export const get = (resource) => {
  return axios.get(`${API}/${resource}`)
}

export const post = (resource, body) => {
  return axios.post(`${API}/${resource}`, { ...body });
}

export function postFile(resource, parameters = {}) {
  return axios.post(`${API}/${resource}`, parameters);
}

export const put = (resource, body) => {
  return axios.put(`${API}/${resource}`, { ...body });
}

export const del = (resource, body) => {
  return axios.delete(`${API}/${resource}`, { ...body });
}

export function handleForInputChangeOnForm(event, callBackHandler) {
  const formData = { ...this.state.formData };
  const value = event.target.value;

  const nodes = `${event.target.id}`.split('.');

  if(nodes.length === 1)
    formData[nodes[0]] = value;
  else
    formData[nodes[0]][nodes[1]] = value;

  this.setState({ formData: formData }, callBackHandler);
}