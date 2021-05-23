interface List {
    readonly id: number; //只读属性
    name: string;
    //3、字符串索引签名
    // [x: string]: any; //字符串索引签名：用任意的字符串索引List可以得到任意结果，就饿可以传入多个属性了
    age?: number
}
interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 12 }
    ]
}

// 1、用变量接可以传入多个参数
render(result)
// 2、使用类型断言
render({
    data: [
        { id: 1, name: 'A', sex: 'male', xxx: 's' },
        { id: 2, name: 'B' }
    ]
} as Result)


// 数字索引签名
interface StringArray {
    [index: number]: string //用任意的数字去索引数字array，都会得到一个string,相当于一个字符串类型数组
}

let chars: StringArray = ['1', 'a']

// 字符串索引签名
interface Names {
    [x: string]: string | number;
    // y:number
    [z: number]: number //数字索引签名，得是字符串索引签名的子类型
}

// 函数接口定义方式1
let addFun: (x: number, y: number) => number
// 函数接口定义方式2
interface Add {
    (x: number, y: number): number //冒号后面是函数的返回值
}
// 函数接口定义方式3-类型别名
type AddType = (x: number, y: number) => number

// 实现具体的函数
let addF: Add = (x, y) => x + y


// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => { }) as Lib
    lib.version = '1';
    lib.doSomething = () => { }
    return lib;
}

let lib1=getLib()
console.log(lib1())
console.log(lib1.doSomething())
console.log(lib1.version)