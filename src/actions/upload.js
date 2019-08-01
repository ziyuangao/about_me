const OSS = require('ali-oss');
const appServer = apiUrl + "/api/osses/get_OSS"
let clientOSS = new OSS({
      region: 'oss-cn-beijing',
      accessKeyId: 'LTAIaKSDlzUDbDDt',
      accessKeySecret: 'qiqlkkNQUiOHCiLUXsscVMjSOckfiT',
      bucket: 'cc-video-bucket',
      endpoint:"oss-cn-beijing.aliyuncs.com"
    });


export async function uploadBase64Img(option = {}, config) {
    if (!clientOSS) {
        await applyTokenDo();
    }
    if (!option.name) return option.onError ? option.onError('请填写文件名，例“file/app/content/imgsize-imgtime-type.png”') : '请填写文件名，例“file/app/content/imgsize-imgtime-type.png”'
    if (!option.base64 || option.base64.indexOf('data:image') !== 0) {
        return option.onError ? option.onError('请上传 Base64 img') : { res: '请上传 Base64 img' };
    }

    option.file = dataURLtoFile(option.base64, 'img.png');
    const fileResult = await readFile(option);

    //格式化文件名
    let ossObj = option.name
    try {
        //调用 oss实例put方式上传文件
        const result = await clientOSS.put(ossObj, OSS.Buffer(fileResult))
        return option.onSuccess ? option.onSuccess(result) : result
    } catch (e) {
        return option.onError ? option.onError('上传失败') : { res: 'FAIL' }
    }
}

export async function uploadFile(option = {}, config) {
    try {
        if (!clientOSS) {
            await applyTokenDo();
        }
        if (!option.name) return option.onError ? option.onError('请填写文件名，例“file/app/content/imgsize-imgtime-type.png”') : '请填写文件名，例“file/app/content/imgsize-imgtime-type.png”'
        const fileResult = await readFile(option);
        if (!fileResult) return option.onError ? option.onError('读取文件失败') : '读取文件失败'
            //格式化文件名
        let ossObj = option.name;
        //调用 oss实例put方式上传文件
        const result = await clientOSS.put(ossObj, OSS.Buffer(fileResult));
        // result.url = result.url.replace('http://cc-video-bucket.oss-cn-beijing.aliyuncs.com', 'https://oss-cn-beijing')
        return option.onSuccess ? option.onSuccess(result) : result
    } catch (e) {
        return option.onError ? option.onError('上传失败') : { res: 'FAIL' }
    }
}

const applyTokenDo = function() {
    return new Promise((resolve, reject) => {
        try {
            axios.post(appServer)
                .then((data) => {
                    clientOSS = new OSS({
                        region: data.oss_region,
                        accessKeyId: data.oss_accessKeyId,
                        accessKeySecret: data.oss_accessKeySecret,
                        endpoint: data.endpoint,
                        bucket: data.oss_bucket,
                    });
                    resolve();
                })
                .catch((err) => {
                    reject();
                })
        } catch (e) {
            reject()
        }
    })
}

const readFile = function(option) {
    return new Promise((resolve, reject) => {
        try {
            let file = new FileReader()
            file.addEventListener('load', e => {
                    resolve(e.target.result)
                })
                //option.file input file 文本框读取到的文件对象
            file.readAsArrayBuffer(option.file)
        } catch (e) {
            reject()
        }
    })
}

/**
 * base64 to file
 * @param dataurl   base64 content
 * @param filename  set up a meaningful suffix, or you can set mime type in options
 * @returns {File|*}
 */

const dataURLtoFile = function(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime }); // if env support File, also can use this: return new File([u8arr], filename, { type: mime });
};

