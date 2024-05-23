import Mock from 'mockjs'
export const userData = Mock.mock({
    // 属性 userList的值是一个数组，随机生成 1 到 10 个元素
    "userList|1-10": [
        {
            // 随机生成1-10个★
            "name": "@cname",

        },
    ],
})
export default  ([
    // 命中 /api/test?a=1
    {
        method: "get",
        url: '/api/user',
        response: () => {
            return {
                msg: "sucess",
                code: 200,
                data: userData
            }
        }
    },
    // 命中 /api/test/abc
    {
        url: '/api/test/abc',
        body: {
            message: 'query.a === 2'
        }
    },

])