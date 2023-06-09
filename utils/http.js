const baseUrl = 'https://star.frbkw.com';
// const baseUrl = 'http://localhost:1337';

var frRequest = function (config) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + config.url,
            //路径
            timeout: 5000,
            //设置请求时间
            data: config.data,
            // 存放的数据
            method: config.method,
            //数据请求方式
            //   header:"",  请求头设置
            success: (res) => {
                resolve(res);
                // console.log('res数据成功了', res);
            },

            fail(err) {
                console.log('err数据请求失败了', err);
            }
        });
    });
};
export default frRequest;
