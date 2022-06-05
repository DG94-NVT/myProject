import axiosClient from './axiosClient';

const studentApi = {
  getAll(params) {
    const url = '/students';
    // return axiosClient.get(url, { params =  params});
    // viet gon lai thanh :(do bien params co ten giong voi tham so params)
    return axiosClient.get(url, { params });
  },
  getByID(id) {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/students';
    return axiosClient.posts(url, data);
  },
  update(data) {
    const url = `/students/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
