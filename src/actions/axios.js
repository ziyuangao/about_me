import qs from 'qs';
import { Message } from 'element-ui';

export default function (axios,router) {
  axios.defaults.timeout = 50000; //超时时间

  axios.interceptors.request.use((config) => {//去掉option测试请求
      if(config.method === 'post') {
          config.data = qs.stringify(config.data);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  }); 

  //响应器，获取数据成功还是失败
  axios.interceptors.response.use(
    response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data);
      }
    },
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      if (error.response&&error.response.status) {
        switch (error.response.status) {
          // 404请求不存在
          case 404:
            var errors = error.response.data.error;
            Message({
              showClose: true,
              message: "网络请求不存在",
              type: 'error'
            });
            break;
          // 400 后端错误统一处理成400
          case 400:
            var errors = error.response.data.error;

            Message({
              showClose: true,
              message: errors.message,
              type: 'error'
            });
            if(errors.code == "00002"){
                localStorage.removeItem('ms_username');
                router.history.push("/login")
            }
            break;
          // 其他错误，直接抛出错误提示
          default:
            break;
        }
      }
    })
  return axios;
}
/**
 * 封装get/delete方法
 * @param {请求接口路径} url
 * @param {请求接口参数} params
 * @param {请求回调方法} callback
 */
export function get(url, params={}, callback) {
    axios.get(apiUrl + url,{
        params,
    })
    .then(response => {
        callback && callback(response);
    },err => {
        Message({
            showClose:true,
            message: "请求数据异常",
            type: 'error'
        });
    })
}
/**
 * 封装patch请求
 * @param {请求接口路径} url
 * @param {请求接口参数} params
 * @param {请求回调方法} callback
 */
export function patch(url, params={}, callback) {
    axios.patch(apiUrl + url,{
        params:params
    })
    .then(response => {
        callback && callback(response);
    }).catch(err => {
        Message({
            showClose:true,
            message: "请求数据异常",
            type: 'error'
        });
    })
}
/**
 * 封装post请求
 * @param {请求接口路径} url
 * @param {请求接口参数} params
 * @param {请求回调方法} callback
 */
export function post(url, params={}, callback) {
    axios.post(apiUrl + url,{
        ...params
    })
    .then(response => {
        callback && callback(response);
    },err => {
        Message({
            showClose:true,
            message: "请求数据异常",
            type: 'error'
        });
    })
}
/**
 * 封装put请求
 * @param {请求接口路径} url
 * @param {请求接口参数} params
 * @param {请求回调方法} callback
 */
export function put(url, params={}, callback) {
    axios.put(apiUrl + url,{
        params:params
    })
    .then(response => {
        callback && callback(response);
    }).catch(err => {
        Message({
            showClose:true,
            message: "请求数据异常",
            type: 'error'
        });
    })
}
