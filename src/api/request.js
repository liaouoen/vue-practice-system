import axios from 'axios';
import config from '../config';
import { ElMessage } from 'element-plus';

const NETWORK_ERROR = '网络请求异常，请稍后重试'

//创建一个axios实例对象
const service = axios.create({
    baseURL: config.baseApi,
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

// 在请求之前做一些事情

// 添加请求拦截器
service.interceptors.request.use(function (req) {
    // 可以自定义header
    // jwt-token认证的时候
    return req;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//在请求之后做一些事情
// 添加响应拦截器
service.interceptors.response.use(function (res) {
    const { code, data, msg } = res.data;
    if (code === 200) {
        return data
    } else {
        //网络请求错误提示
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
});


// 封装核心函数
function request(options) {
    // { 
    //     method: 'get',
    //     data: {

    //     }
    // }
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }
    // 对mock开关的处理
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') {
        isMock = options.mock
    }

    // 防止线上环境误用mock数据
    if (config.env == 'prod') {
        // 不给用到mock的机会
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }


    return service(options)
}

export default request