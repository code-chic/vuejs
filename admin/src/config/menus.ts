type MenuConfig = {
  id: string;
  name: string;
  path: string | null;
  children?: MenuConfig[];
  icon?: string;
}

const menus: MenuConfig[] = [
  {
    id: '1',
    name: '首页',
    path: '/',
    icon: 'el-icon-message'
  },
  {
    id: '2',
    name: '订单系统',
    path: null,
    children: [
      {
        id: '2-1',
        name: '订单列表',
        path: '/order/list'
      },
      {
        id: '2-2',
        name: '异常订单',
        path: '/order/exception'
      },
      {
        id: '2-3',
        name: '白名单',
        path: '/order/withe',
        children: [
          {
            id: '2-3-1',
            name: '脱敏白名单',
            path: '/order/withe/tm'
          }
        ]
      }
    ],
    icon: 'el-icon-message'
  }
]

export default menus
