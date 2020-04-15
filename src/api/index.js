import ajax from './ajax'
let testURl = 'http://192.168.11.2:8081'
export const getUserInfo = (token) => ajax(testURl + '/v1.1/getEncryptionAccessByN?encryption=' + token + '') //根据秘钥获取用户信息

export const getAllEa = () => ajax(testURl + '/v1.1/getEncryptionAccesses') //获取所有的加密信息

export const getVersionInfo = (id) =>ajax(testURl+'/v1.1/getVersionInfo?id='+id+'')//根据id获取版本信息

export const getInterface = (id) =>ajax(testURl+'/v1.1/getInterface?id='+id+'')//根据id获取接口详情
