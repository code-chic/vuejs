export interface MenuConfig {
  id: string;
  path: string;
  name: string;
  children?: MenuConfig[];
  icon?: string;
  pid: string;
}

const menus: MenuConfig[] = [
  {
    id: '1',
    path: '/',
    name: '首页',
    icon: 'el-icon-location',
    pid: '0'
  },
  {
    id: '2',
    path: '/order',
    name: '订单系统',
    children: [
      {
        id: '2-1',
        path: '/order/list',
        name: '订单列表',
        pid: '2'
      },
      {
        id: '2-2',
        path: '/order/exception',
        name: '异常订单',
        pid: '2'
      },
      {
        id: '2-3',
        path: '/order/record',
        name: '订单记录',
        children: [
          {
            id: '2-3-1',
            path: '/order/record/history',
            name: '历史订单',
            pid: '2-3'
          }
        ],
        pid: '2'
      }
    ],
    icon: 'el-icon-menu',
    pid: '0'
  }
]

export default menus
