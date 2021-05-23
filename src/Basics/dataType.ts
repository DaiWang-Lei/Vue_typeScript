// 原始类型
let bool: boolean = true
let num: number = 12
let str: string = '阿道夫'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [4123, 123123]
let arr3: Array<number | string> = [4123, 123123, 'asd']

// 元组
// 一种特殊的数组，限定了数组的类型和个数
let tuple: [number, string] = [1, '2']
tuple.push(1) //可以通过push添加新元素，但是不能访问
console.log(tuple)

// 函数
let add = (x: number, y: number): number => x + y
// 通常函数返回值的类型注解可以省略，利用ts的类型推断
let add1 = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()
console.log(s1 === s2)

// undefined ,null
// undefined ,null 在ts中为所有类型的子集
// 打开tsconfig.json，将strictNullChecks改为false，即可将null和undefined赋值给其他类型
let un: undefined = undefined
let nu: null = null
// num = null
// num = undefined

// void
// 没有任何返回值的类型
let noReturn = () => { }

// any 不指定类型，默认any
let x
//never 类型，永远都不会有返回值的类型
// 死循环
