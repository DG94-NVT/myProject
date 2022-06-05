import axiosClient from './axiosClient';

const postsApi = {
  getAll(params) {
    const url = '/posts';
    // return axiosClient.get(url, { params =  params});
    // viet gon lai thanh :(do bien params co ten giong voi tham so params)
    return axiosClient.get(url, { params });

    // co the tuy chinh cau hinh cho cac method :( Request Config) url, baseURL, header, transformRequest ...
    // vd : thay doi baseURL mac dinh :
    //  return axiosClient.get(url, { params, baseURL:'https://abc.com/' });
  },
  getByID(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/posts';
    return axiosClient.posts(url, data);
  },
  update(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default postsApi;
