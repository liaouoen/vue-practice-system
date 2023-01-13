import { createStore } from 'vuex'

export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        dataList: [
            {
                path: "/home",
                name: "home",
                label: "首页",
                icon: "house",
                url: "home",
            },
            {
                path: "/user",
                name: "user",
                label: "用户管理",
                icon: "user",
                url: "UserManage/UserManage",
            },
            {
                path: "/other",
                name: "other",
                label: "其他",
                icon: "location",
                children: [
                    {
                        path: "/other/page1",
                        name: "page1",
                        label: "页面1",
                        icon: "setting",
                        url: "Other/PageOne",
                    },
                    {
                        path: "/other/page2",
                        name: "page2",
                        label: "页面2",
                        icon: "setting",
                        url: "Other/PageTwo",
                    },
                ],
            }
        ],
        tagList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ]
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectHome(state) {
            state.currentMenu = null
        },
        selectMenu(state, val) {
            // val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
            if (val.name == 'home') {
                state.currentMenu = null;
            } else {
                state.currentMenu = val;
                let result = state.tagList.findIndex(item => item.name === val.name)
                result === -1 ? state.tagList.push(val) : ''
            }

        },
        closeTag(state, val) {
            let res = state.tagList.findIndex(item => item.name === val.name)
            state.tagList.splice(res, 1)
        }
    }
})