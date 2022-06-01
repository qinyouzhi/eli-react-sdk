import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 60000, // 请求超时时间
  headers: {
    Auth: '',
  },
});

const err = error => {
  if (error.response) {
    const data = error.response.data;
    console.log(data);
  } else {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了');
    } else {
      // 可以展示断网组件
      console.log('断网了');
    }
  }
  return Promise.reject(error);
};

/**
 * 处理参数
 * @param {*} config
 */
const handleParams = config => {
  return config;
};

// request interceptor
service.interceptors.request.use(config => {
  return handleParams(config);
}, err);

// response interceptor
service.interceptors.response.use(response => {
  const { status } = response;
  if (status === 200) {
    return response.data;
  }

  return Promise.reject(response.data);
}, err);

export default service;
