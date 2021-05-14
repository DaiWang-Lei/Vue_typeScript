// 类型兼容性

// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的
let a = 1
let b = [1]

let c = (x = 1) => x + 1

// window.onkeydown = (event) => {
//     // console.log(event.button)
// }
interface Foo {
    bar: number
}
// 类型断言
let foo: Foo = {
    bar: 1
}
// foo.bar = 1


// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let adx: X = {
    a: 1,
    b: 2
}
let ady: Y = {
    a: 1, b: 2, c: 3
}
adx = ady


// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}
//1.参数个数
let handler1 = (a: number) => { }
hof(handler1)
let handler3 = (a: number, b: number, c: number) => { }
// hof(handler3)  

// 可选参数和剩余参数
let ada = (p1: number, p2: number) => { }
let adb = (p1: number, p2?: number) => { }
let adc = (...args: number[]) => { }
ada = adb
ada = adc
// adb = adc
// adb = ada
adc = ada
adc = adb

// 2、参数类型
let handler2 = (a: string) => { }
// hof(handler2)

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
p3d = p2d
// p2d = p3d

let adf = () => ({ name: 'Alice' });
let adg = () => ({ name: 'Alice', location: 'ShangHai' })

adf = adg
// adg = adf

// 函数重载
function overLoad(a: number, b: number): number;
function overLoad(a: string, b: string): string
function overLoad(a: any, b: any,): any { }


// 枚举兼容性

enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 构造函数和私有成员不做比较
class A {
    constructor(p: number, q: number) {

    }
    id: number = 1
    private name: string = '1'
}
class B {
    static s = 1
    private name: string = ''
    constructor(p: number) { }
    id: number = 2
}
let aa = new A(1, 2)
let bb = new B(2)
// aa=bb
// bb=aa
// 父类和子类可以互相兼容
class C extends A { }
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容
interface Empty<T> {
    value: T
}

// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1 = obj2
// obj2 = obj1

let adlog1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let adlog2 = <U>(y: U): U => {
    console.log('y')
    return y
}

adlog1=adlog2
adlog2=adlog1