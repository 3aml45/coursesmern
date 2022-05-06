import axios from 'axios';

export const getPostsRequest = async () => await axios.get('/apicourses');

export const createPostRequest = async course => {
  const form = new FormData();
  for (let key in course) {
    form.append(key, course[key])
  }
  return await axios.post('/apicourses', course, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
// 'Content-Type': 'multipart/form-data'

export const deletePostRequest = async id => await axios.delete('/apicourses/' + id)

export const getPostRequest = async id => await axios.get('/apicourses/' + id);

export const updatePostRequest = async (id, newFields) => await axios.put(`/apicourses/${id}`, newFields);

