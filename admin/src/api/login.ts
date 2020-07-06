interface Response<T> {
  status: number; // 请求状态
  data: T & any; // 返回数据类型
  errMsg: string; // 消息提示
}

type loginApiType = {
  username: string
  password: string
}

export const loginApi = async (params: loginApiType): Promise<Response<boolean>> => {
  if (params.username !== 'admin' || params.password !== 'admin') {
    return {
      status: 200,
      data: false,
      errMsg: '用户名或密码错误'
    }
  }
  return {
    status: 200,
    data: true,
    errMsg: '登录成功'
  }
}
