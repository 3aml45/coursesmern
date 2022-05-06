import axios from 'axios';

export const getPostsRequest = async () => await axios.get('/courses');

export const createPostRequest = async course => {
  const form = new FormData();
  for (let key in course) {
    form.append(key, course[key])
  }
  return await axios.post('/courses', course, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
// 'Content-Type': 'multipart/form-data'

export const deletePostRequest = async id => await axios.delete('/courses/' + id)

export const getPostRequest = async id => await axios.get('/courses/' + id);

export const updatePostRequest = async (id, newFields) => await axios.put(`/courses/${id}`, newFields);

