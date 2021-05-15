// 接口只能约束类的公有成员
interface Human {
    name: string;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() { }
    sleep() { }
}

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {

}

let boy: Boy = {
    name: '',
    eat() { },
    run() { },
    cry() { }
}

class Auto {
    state = 1
    private state2 = 2
}
interface AutoInterface extends Auto {

}

// class C implements AutoInterface {
//     state = 1

// }

class Bus extends Auto implements AutoInterface {

}




// 类型保护

enum Type {
    Strong,
    Week
}

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    javaScript: any
}

// 类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}




function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // 类型断言，可读性不好
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloJavaScript()
    // }
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // 通过属性创建类型保护区块
    if ('java' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // typeof
    if (typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2)
    }
    return lang
}




// 交叉类型与联合类型
// 交叉类型
interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = {
    run() { },
    jump() { }
}

// 联合类型
let aLianhe: number | string = '1'
let bLianhe: '1' | 'b'
let cLianhe: 1 | 2 | 3

// 对象的联合类型
class DogLian implements DogInterface {
    run() { }
    eat() { }
}

class CatLian implements CatInterface {
    jump() { }
    eat() { }
}

enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogLian() : new CatLian()
    pet.eat()
    return pet
}

interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.width * s.height
        case 'circle':
            return Math.PI * s.r ** 2
        default:
            return ((e:never)=>{throw new Error(e)})(s)
    }
}
console.log(area({ kind: 'circle', r: 1 }))