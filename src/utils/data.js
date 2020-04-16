
export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
 var Y = date.getFullYear() + '-';
 var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
 var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
 var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
 var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
 var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
  return Y+M+D+h+m+s;
}

const testData = [{
  _id: "5e86af5b1ad1b90718fdc460",
  project: 20,
  title: "获取令牌接口",
  description: "获取令牌接口",
  requestAddress: "https://open.dascomyun.com/api/v1.1/jsonWebTokens/getTokens",
  requestType: "POST",
  type:'token',
  requestHeader: [{
    parameterName: "Content-Type",
    isChoice: true,
    parameterType: "String",
    parameterState: "值：application/json"
  }],
  requestParamter: [{
    parameterName: "dsAppid",
    isChoice: true,
    parameterType: "String（32）",
    parameterState: "用户唯一标识"
  }, {
  parameterName: "secret",
    isChoice: true,
    parameterType: "String（32）",
    parameterState: "密钥"
  }],
  requestInstance: "<pre style=\"margin-top: 0px; margin-bottom: 10px; padding: 9.5px; font-size: 13px; line-height: 1.42857; color: #333333; word-break: break-all; overflow-wrap: break-word; background-color: #f5f5f5; border: 1px solid #cccccc; border-radius: 4px;\">{\n      <samp style=\"margin: 0px; padding: 0px; color: #008626;\">\"dsAppid\":xxxx,\n      \"secret\":xxxx</samp>\n}</pre>",
  returnInstance: "<pre style=\"margin-top: 0px; margin-bottom: 10px; padding: 9.5px; font-size: 13px; line-height: 1.42857; color: #333333; word-break: break-all; overflow-wrap: break-word; background-color: #f5f5f5; border: 1px solid #cccccc; border-radius: 4px;\"> {\n                <samp style=\"margin: 0px; padding: 0px; color: #008626;\"> \"code\": 0,\n                \"data\": {\n                        \"accessToken\": \"eb9d3de188f15b588273b02bc9bdc011\",\n                        \"surplusCount\": 1999,\n                        \"expiresIn\": 7200000</samp>\n  </pre>",
  returnParamter: [{
    parameterName: "code",
    isChoice: null,
    parameterType: "Integer",
    parameterState: "返回码"
  }, {
    parameterName: "data",
    isChoice: null,
    parameterType: "Json",
    parameterState: "返回信息"
  }, {
    parameterName: "accessToken",
    isChoice: null,
    parameterType: "String（32）",
    parameterState: "token值"
  }, {
    parameterName: "surplusCount",
    isChoice: null,
    parameterType: "Integer",
    parameterState: "剩余获取token的次数,每天获取次数上限为2000次"
  }, {
    parameterName: "expiresIn",
    isChoice: null,
    parameterType: "Long",
    parameterState: "token的存活时间，每个token的存活时间为7200000(2小时),单位为毫秒"
  }],
  createDate: 1585885019226,
  updateDate: 1585896678056
},{
  _id: "5e86af5b1ad1b90718fdc460",
  project: 20,
  title: "获取设备状态",
  description: "获取设备状态",
  type:'type',
  requestAddress: "https://open.dascomyun.com/api/v1.1/jsonWebTokens/getTokens",
  requestType: "POST",
  requestHeader: [{
    parameterName: "Content-Type",
    isChoice: true,
    parameterType: "String",
    parameterState: "值：application/json"
  }],
  requestParamter: [{
    parameterName: "dsAppid",
    isChoice: true,
    parameterType: "String（32）",
    parameterState: "用户唯一标识"
  }, {
  parameterName: "secret",
    isChoice: true,
    parameterType: "String（32）",
    parameterState: "密钥"
  }],
  requestInstance: "<pre style=\"margin-top: 0px; margin-bottom: 10px; padding: 9.5px; font-size: 13px; line-height: 1.42857; color: #333333; word-break: break-all; overflow-wrap: break-word; background-color: #f5f5f5; border: 1px solid #cccccc; border-radius: 4px;\">{\n      <samp style=\"margin: 0px; padding: 0px; color: #008626;\">\"dsAppid\":xxxx,\n      \"secret\":xxxx</samp>\n}</pre>",
  returnInstance: "<pre style=\"margin-top: 0px; margin-bottom: 10px; padding: 9.5px; font-size: 13px; line-height: 1.42857; color: #333333; word-break: break-all; overflow-wrap: break-word; background-color: #f5f5f5; border: 1px solid #cccccc; border-radius: 4px;\"> {\n                <samp style=\"margin: 0px; padding: 0px; color: #008626;\"> \"code\": 0,\n                \"data\": {\n                        \"accessToken\": \"eb9d3de188f15b588273b02bc9bdc011\",\n                        \"surplusCount\": 1999,\n                        \"expiresIn\": 7200000</samp>\n  </pre>",
  returnParamter: [{
    parameterName: "code",
    isChoice: null,
    parameterType: "Integer",
    parameterState: "返回码"
  }, {
    parameterName: "data",
    isChoice: null,
    parameterType: "Json",
    parameterState: "返回信息"
  }, {
    parameterName: "accessToken",
    isChoice: null,
    parameterType: "String（32）",
    parameterState: "token值"
  }, {
    parameterName: "surplusCount",
    isChoice: null,
    parameterType: "Integer",
    parameterState: "剩余获取token的次数,每天获取次数上限为2000次"
  }, {
    parameterName: "expiresIn",
    isChoice: null,
    parameterType: "Long",
    parameterState: "token的存活时间，每个token的存活时间为7200000(2小时),单位为毫秒"
  }],
  createDate: 1585885019226,
  updateDate: 1585896678056
}]

export default{
  testData
}
