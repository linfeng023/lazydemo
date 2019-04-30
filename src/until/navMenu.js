const navMenu = [
  {
    index:"1",
    menuName:'others',
    menuIcons:'el-icon-message',
    childrenMenu:[
      {
        index:"Dialog",
        menuName:'对话框',
      },
      {
        index:"/DialogForm",
        menuName:'对话框-表单',
      }
    ]
  },
  {
    index:"2",
    menuName:'菜单二',
    menuIcons:'el-icon-menu',
    childrenMenu:[
      {
        index:"2-1",
        menuName:'子菜单一',
      }
    ]
  },
  {
    index:"3",
    menuName:'菜单三',
    menuIcons:'el-icon-setting',
    childrenMenu:[
      {
        index:"3-1",
        menuName:'子菜单一',
      }
    ]
  }
]
export default {
  navMenu
}