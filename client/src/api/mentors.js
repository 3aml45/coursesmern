import axios from 'axios';

export const getMentorsRequest = async () => await axios.get('/mentors');

export const createMentorRequest = async mentor => {
  const form = new FormData();
  for (let key in mentor) {
    form.append(key, mentor[key])
  }
  return await axios.post('/mentors', mentor, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const deleteMentorRequest = async id => await axios.delete('/mentors/' + id)

export const getMentorRequest = async id => await axios.get('/mentors/' + id);

export const updateMentorRequest = async (id, newFields) => await axios.put(`/mentors/${id}`, newFields);