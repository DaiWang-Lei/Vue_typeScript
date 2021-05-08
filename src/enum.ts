enum Role {
    Reporter = 1,
    Developer,
    MainTainer,
    Owner,
    Guest
}
console.log(Role.Reporter)

// 字符串枚举
// 不可以进行反向映射
enum Message {
    Success = '成功了',
    Fail = '瓦拉那'
}