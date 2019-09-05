import axios from 'axios';

// axios 设置
// axios 全局配置
axios.defaults.baseURL = 'http://192.168.1.1:8080';
// 支持跨域cookie
axios.defaults.withCredentials = false;
// 超时时间
axios.defaults.timeout = 50000;
// get请求默认的content-type
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;
