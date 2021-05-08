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

// 异构枚举
enum Answer {
    N,
    Y = 'yse'
}

// Role.Reporter = 2
// 枚举成员
enum Char {
    a,//常量枚举
    b = Char.a,//常量枚举
    c = 1 + 2,//常量枚举
    d = Math.random(), //计算枚举，运行时环境才会计算
    e = '123'.length//计算枚举
}

//常量枚举
// const 声明的枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b } //枚举成员没有初始值
enum F { a = 0, b = 1 }//所有成员都是数字枚举
enum G { a = 'apple', b = 'orange' }

let e: E = 3
let f: F = 3
// 两种枚举类型不同是的变量是无法比较的，始终返回false
//e === f false
let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
console.log(e1 === e3)

//字符串枚举取值只能是枚举成员的类型
let g1: G = G.a
let g2: G.a
