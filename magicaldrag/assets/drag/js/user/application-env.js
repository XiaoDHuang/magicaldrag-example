/*环境变量 所有变化的东西 统一放在此处*/
function ApplicationEnv(){
    this.env = {
        serverPath:"/",//服务端前缀
        key:{
            //允许的域名
            domain:".magicalcoder.com",
            //发放的加密串 请咨询www.magicalcoder.com
            secret:"4219a033c9d180edfeeaf54e0f138eb99439fe90e6b8f3196cf5717141941427c9e4e38ead26af6cfe29875c0fc92ee7d3da61f33fca637ee031c0c3820f4f3389ce26c4ca61e0a9fc5377fa3ce3ff35d9d3b5e90ee6717823213290940bb19ca1b68dab10f63dc8d62e6c76d6b2625f5a4f8a698e01a31869f60e37c716fb2d",
        }
    }
}
ApplicationEnv.prototype.getEnv = function () {
    return this.env;
}
var APPLICATION_ENV = new ApplicationEnv();
