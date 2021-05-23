// 函数定义
// 下面是汇总，说明
function addFunction(x: number, y: number) {
    return x + y
}
// 只是定义，并没有创建函数||真正的实现
// 2、用变量定义一个函数类型
let addFunction2: (x: number, y: number) => number

//3、类型别名 来定义函数类型
type addFunction3 = (x: number, y: number) => number

//接口
interface addFunction4 {
    (x: number, y: number): number
}

// 形参，实参一一对应
addFunction(1, 2)
// 可选参数必须位于必选参数之后
function addFunction5(x: number, y?: number) {
    return y ? x + y : x
}
addFunction5(1)

function addFunction6(x: number, y = 0, z: number, q: number = 2) {
    return x + y + z + q
}
addFunction6(1, 2, 2, 3)
function addFunction7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(addFunction7(1, 23, 4, 123, 12))

// 函数重载:函数名相同，参数个数不同，函数类型不同
// 优势：不需要为相似类型功能的函数，起不同的名字，增强可读性

function addFunction8(...rest: number[]): number;
function addFunction8(...rest: string[]): string;
function addFunction8(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    } else {
        return rest.reduce((pre, cur) => pre + cur)
    }
}
console.log(addFunction8(1,2,3,4,4))
console.log(addFunction8('asd','2',"as",'4','4'))

