// private 私有成员，只能在类本身去调用，不能在实例去调用或者不能被子类调用
// protected 受保护成员，只能在类或者子类中访问，不能在类的实例中访问
// readonly 只读，必须被初始化
// static 静态成员可以被类或类的子类调用，不能被实例调用。



// 抽象类  abstract，方便复用，实现多态
abstract class Animal {
    // 指定具体方法的实现，子类可以直接调用，方便复用
    eat() {
        console.log('eat')
    }
    // 抽象方法，明确知道抽象方法，可以在子类有不同的实现，就不用再父类中写了
    abstract sleep(): void
}
// let animal = new Animal()

class Dog extends Animal {
    // 如果给构造函数加上private，则该类不可以被实例化，也不能被继承
    // 如果给构造函数加上protected，则该类，只能被继承，不能被实例化，相当于生成了一个基类
    constructor(name: string) {
        super()
        this.name = name
    }
    public name: string
    run() { }
    private pri() { } //
    protected pro() { }
    readonly legs: number = 4
    static food: string = 'bone'
    sleep() {
        console.log('趴着睡')
    }
}
console.log(Dog.prototype)
console.log(Dog.food)


// 实例
// “类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
let dog = new Dog('wang')
console.log(dog)
// dog.pri()
// dog.pro()
dog.eat()
dog.sleep()

// 子类
class Doge extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }
    // color: string
}
console.log(Doge.food)


class Cat extends Animal {
    sleep() {
        console.log('miaomiao 不睡')
    }
}
let cat = new Cat()
let animals: Animal[] = [dog, cat]

animals.forEach(i => {
    i.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}

new Myflow().next().step1().next().step2()




// const list: object[] = [

type Item = {
    x: string,
    y: string,
    z: string,
    serialNumber: string,
    lableName: string,
    ip: string
}
type Something = Item & {
    haha: string
}

const list: Item[] = [

    {
        x: 'x',
        y: "y",
        z: "z",
        serialNumber: "F6H4AFB469",
        lableName: "zg-xsf-x6",
        ip: "10.182.31.13"
    },
    {
        x: 'x',
        y: "y",
        z: "z",
        serialNumber: "F6H4AFB497",
        lableName: "zg-xsf-x7",
        ip: "10.182.31.12"
    },
    {
        x: 'x',
        y: "y",
        z: "z",
        serialNumber: "F6H4AEH534",
        lableName: "zg-xsf-x8",
        ip: "10.182.31.11"
    },
    {
        x: 'x',
        y: "y",
        z: "z",
        serialNumber: "F6H4AFB564",
        lableName: "zg-xsf-x9",
        ip: "10.182.31.10"
    }
]


const res = list.map((item) => {
    return { ip: item.ip, xxlableName: item.lableName, serName: item.serialNumber }
})
// console.log(res);


