// 环境配置文件 -- 开发环境/测试环境/线上环境


const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    // 开发环境
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/3735c124dc55b3961c35241e90e1b1c5/api'
    },
    // 测试环境
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/3735c124dc55b3961c35241e90e1b1c5/api'
    },
    // 线上环境
    pro: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/3735c124dc55b3961c35241e90e1b1c5/api'
    }
}

export default {
    env,
    // mock总开关
    mock: true,
    ...EnvConfig[env]
}