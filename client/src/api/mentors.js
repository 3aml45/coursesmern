import axios from 'axios';

export const getMentorsRequest = async () => await axios.get('/apimentors');

export const createMentorRequest = async mentor => {
  const form = new FormData();
  for (let key in mentor) {
    form.append(key, mentor[key])
  }
  return await axios.post('/apimentors', mentor, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const deleteMentorRequest = async id => await axios.delete('/apimentors/' + id)

export const getMentorRequest = async id => await axios.get('/apimentors/' + id);

export const updateMentorRequest = async (id, newFields) => await axios.put(`/apimentors/${id}`, newFields);