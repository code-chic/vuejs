// 自动生成随机数
export const random = (): number => {
  return Math.ceil(Math.random() * 100)
}

// 填充前置字符零
export const prefixFillZeroStr = (num: string | number, lenght: number): string => {
  return String(num).padStart(lenght, '0')
}

// 生成一小时数据
export const generateHourData = (): string[] => {
  const data: string[] = []
  let minutes = 0 // 分钟
  for (let i = 0; i <= 3600; i++) {
    if (i % 60 === 0) {
      minutes++
      data.push(`2020-07-04 17:${prefixFillZeroStr(minutes, 2)}:00`)
    } else {
      data.push(`2020-07-04 17:${prefixFillZeroStr(minutes, 2)}:${prefixFillZeroStr(i % 60, 2)}`)
    }
  }
  return data
}
