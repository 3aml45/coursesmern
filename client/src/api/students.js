import axios from 'axios';

export const getStudentsRequest = async () => await axios.get('/apistudents');

export const createStudentRequest = async student => {
  const form = new FormData();
  for (let key in student) {
    form.append(key, student[key])
  }
  return await axios.post('/apistudents', student, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const deleteStudentRequest = async id => await axios.delete('/apistudents/' + id)

// export const getMentorRequest = async id => await axios.get('/mentors/' + id);

// export const updateMentorRequest = async (id, newFields) => await axios.put(`/mentors/${id}`, newFields);