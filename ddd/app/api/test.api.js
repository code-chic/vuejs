import * as fetch from '@/util/fetch'

// 获取测试数据接口
export const getTestData = params => fetch.doGet('/test/getTestData', params)

// 新增测试数据接口
export const addTestData = params => fetch.doPost('/test/addTestData', params)
