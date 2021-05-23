// import './dataType'
// import './enum'
// import './interface'
// import './function'
// import './class'
// import './class-interface'
// import './generics'
import './Basics/advanced'
let hello: string = 'hello TypeScript'
document.querySelectorAll('.app')[0].innerHTML = hello


// function getInfo(member:{name:string}, year:{}) {
//     member.name = 'css'
//     year = '1998'
// }
// var person = {name:'html'}
// var birthday = '1997'
// getInfo(person,birthday)
// console.log(person,birthday)

const obj1 = {
    n: 10,
    get m() {
        return this.n * 10
    }
}
console.log(obj1.m)