import './style.css';
import {Emitter} from './emitter'

document.getElementById('app').innerHTML = `<h1>closures</h1> <p>Откройте консоль</p>`;

const emitter = new Emitter()
emitter.listen('test1', (args)=>{console.log('from Emitter',args)})
emitter.emit('test1', {name:'Vladimir'})

function Component(){
  this.$ = Emitter.call(this)
  this.html = ''
}
// Component.prototype = Object.create(Emitter.prototype)

// Component.prototype = Emitter.call(this) // !!! ОБЩИЙ Emitter - в таком варианте Masha отразиться и у component1 и у component2 

const component1 = new Component()
component1.$.listen('test1', (args)=>{console.log('from Component1', args)})
component1.$.emit('test1', {name:'Vasya'})

const component2 = new Component()
component2.$.listen('test1', (args)=>{console.log('from Component2', args)})
component2.$.emit('test1', {name:'Masha'})

emitter.emit('test1', {name:'Люся'})


// НАВОДИМ КРАСОТУ :)
const data =[ {name: 'aaa', age: 11},{name: 'bbb', age: 22} ]
const arr = new Array(data.length)
  .fill('')
  .map(createArr(data))

function createArr(data) {
  // передаем/возвращаем аналог array.map( function( currentValue, index, arr )
  return (col, index) =>{
    return JSON.stringify({ name: data[index].name, index, age: data[index].age })
  }
}
console.log(arr)


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(log) // вызов без скобок работает !
  // аналог .then(json => console.log(json))
function log(data){ console.log(data) }