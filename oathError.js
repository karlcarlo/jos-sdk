/**
 * New node file
 */
//客户端异常
var oathError = {
101 : "这个应用不存在",
102 : "这个应用还没有上线",

//用户登录时，用户异常如下：
201 : "您的IP服务受限，请联系客服解决",
202 : "请输入用户名",
203 : "用户名不存在",
204 : "请输入密码",
205 : "登录信息与密码不匹配",
206 : "用户名与密码不匹配，还可尝试{0}次，如失败账户将被冻结2小时",
207 : "登录失败超过6次，账户已被冻结2个小时",
208 : "容器检查登录用户不在应授权用户中",
209 : "未知异常，请联系管理员",

301 : "缺少responsetype参数 或者为空",
302 : "缺少clientId 参数 或者为空",
303 : "缺少redirectUri 参数 或者为空",
304 : "防止session伪造（在授权过程中点击了回退按钮）",
305 : "拼写的redirect_uri和注册应用的“回调页面URL”不一致",

//用户登录时，系统异常如下：
251 : "调用验证登录信息的接口失败",
252 : "调用验证登录信息接口返回的json串格式错误，解析失败",
//其他异常
401 : "没有此流程的认证权限",
402 : "错误的code（1、code码超时，code码时效为5分钟；2、测试环境与正式环境code码混用；3、自己编造的code码）",
403 : "url不匹配（请求url与开发者中心创建应用时填写的url不一致；2、没有填写url）",
404 : "错误客户端",
405 : "错误scope权限（填写了scope参数）",
};

module.exports = oathError;