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
    name: 'Dashboard',
    path: '/',
    icon: 'el-icon-location',
    pid: '0'
  },
  {
    id: '2',
    name: '订单系统',
    path: '/order',
    children: [
      {
        id: '2-1',
        name: '订单列表',
        path: '/order/list',
        pid: '2'
      }
    ],
    icon: 'el-icon-message',
    pid: '0'
  }
]

export default menus
