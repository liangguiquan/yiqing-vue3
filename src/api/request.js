// 这个js文件主要用于创建axios实例对象，并设置拦截器

import axios from 'axios';

const instance = axios.create();  // 创建一个axios实例

// 拦截器
instance.interceptors.response.use(res => {
    // return res;
    return res.data;
});

export default instance;