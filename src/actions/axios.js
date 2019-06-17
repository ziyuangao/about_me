import { Message } from 'element-ui';
import axios from 'axios';
export default function (axios,router) {

  axios.defaults.timeout = 5000; //超时时间

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
            //console.log(errors);
            Message({
              showClose: true,
              message: errors.message,
              type: 'error'
            });
            //console.log(router)
            break;
          // 其他错误，直接抛出错误提示
          default:
            break;
        }
      }
    })
  return axios;
}

export function get(url,values,suc,err) {//get
axios.get( myUrl + url, {
    params:{...values}
})
.then(suc,err)
}
export function post(url,values,suc,err) {//post
    axios.post( myUrl + url, {
        ...values,
    })
    .then(suc,err)
}
export function deleteMsg(url,values,suc,err) {//delete
    axios.delete( myUrl + url, {
        data:{...values}
    })
    .then(suc,err)
}
export function put(url,values,suc,err) {//put
    axios.put( myUrl + url, {
        ...values,
    })
    .then(suc,err)
}