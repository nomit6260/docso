import axios from 'axios';
import { API_URL } from './env'

const encode = encodeURIComponent;
const responseBody = res => res.body;

// let token = null;
// const tokenPlugin = req => {
//   if (token) {
//     req.set('authorization', `Token ${token}`);
//   }
// }

const requests = {
  get: async url =>
     {
            const res = await axios.get(`${API_URL}${url}`)
            return res.data

    }
};

const limit = (count, p) => `_limit=${count}&_start=${p ? p * count : 0}`;
const Articles = {
  all: (page, sort="desc") =>
    { 
        return requests.get(`/articles?${limit(10, page)}&_sort=createdAt:${sort}`)
    },
  byAuthor: (author, page) =>
  {
    return requests.get(`/articles?author.username=${encode(author)}&${limit(5, page)}`)
  },
  get: slug =>
  {
    return requests.get(`/articles/${slug}`)
  },
  searchByTitle: (keyword, page) => 
  {
    return requests.get(`/articles?title_contains=${keyword}&${limit(5, page)}`)
  }
};

const Profile = {
  get: username =>
  {
    return  requests.get(`/users/${username}`)
  }
};

export default {
  Articles,
  Profile,
//   setToken: _token => { token = _token; }
};
