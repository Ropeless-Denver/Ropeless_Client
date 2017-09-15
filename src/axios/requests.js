import axios from 'axios';

const API_URL = 'http://localhost:3000';

// climbs

export function getClimbs() {
  return axios.get(`${API_URL}/routes`);
}

export function postClimbs() {
  return axios.post(`${API_URL}/routes`);
}

export function putClimbs() {
  return axios.put(`${API_URL}/routes`);
}

export function deleteClimbs() {
  return axios.delete(`${API_URL}/routes`);
}

// notes

export function getNotes() {
  return axios.get(`${API_URL}/notes`);
}

export function postNotes() {
  return axios.post(`${API_URL}/notes`);
}

export function deleteNotes(id) {
  return axios.delete(`${API_URL}/notes/${id}`);
}
