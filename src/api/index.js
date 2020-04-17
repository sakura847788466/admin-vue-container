import ajax from './ajax'
let testURl = 'http://192.168.11.231:8081'
let PRINT_URL = 'https://open.dascomyun.com/api/v1.1/'
export const getUserInfo = (token) => ajax(testURl + '/v1.1/getEncryptionAccessByN?encryption=' +token + '') //根据秘钥获取用户信息

export const getAllEa = () => ajax(testURl + '/v1.1/getEncryptionAccesses') //获取所有的加密信息

export const getVersionInfo = (id) =>ajax(testURl+'/v1.1/getVersionInfo?id='+id+'')//根据id获取版本信息

export const getInterface = (id) =>ajax(testURl+'/v1.1/getInterface?id='+id+'')//根据id获取接口详情

export const getAllInterface = () =>ajax(testURl+'/v1.1/getInterfaces')//获取全部的接口

//接口调试
export const getToken = (dsAppid, secret) => ajax(PRINT_URL + 'jsonWebTokens/getTokens', { dsAppid, secret }, 'POST')//获取token
