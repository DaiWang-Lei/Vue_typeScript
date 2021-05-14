// 泛型函数
function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<String[]>(['a', 'b'])
log([1, 2, 3, 4])

// 定义一个函数类型，使用类型别名
type Log = <T>(value: T) => T

let myLog: Log = log

interface Ilog<T = string> {
    (value: T): T
}

// let myILog: Ilog<number> = log
let myILog: Ilog = log

myILog('1')

// 泛型类
class ClassLog<T>{
    run(value: T) {
        console.log(value);
        return value;
    }
}

let log1 = new ClassLog<number>()
log1.run(1)

let log2 = new ClassLog()
log2.run(['1', 2, 4])

// 泛型约束
interface Length {
    length: number
}
function fLog<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}
fLog([1, 2, 2, 3, 5,])
fLog('1123123123')
fLog({ a: '1', length: 1 })

