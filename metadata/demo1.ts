import 'reflect-metadata';
class DefineMetadata {
  static staticMethod () {}
  static staticProperty = 'static'
  getName () {}
}
const type = 'xxxxxx';

Reflect.defineMetadata(type, 'class', DefineMetadata)
Reflect.defineMetadata(type, 'staticMethod', DefineMetadata.staticMethod)
Reflect.defineMetadata(type, 'method', DefineMetadata.prototype.getName)
Reflect.defineMetadata(type, 'staticProperty', DefineMetadata, 'staticProperty')

const p1 = Reflect.getMetadata(type, DefineMetadata)
const p2 = Reflect.getMetadata(type, DefineMetadata.staticMethod)
const p3 = Reflect.getMetadata(type, DefineMetadata.prototype.getName)
const p4 = Reflect.getMetadata(type, DefineMetadata, 'staticProperty')

console.log(`Reflect.getMetadata(type, DefineMetadata): ${p1}`)
console.log('')
console.log(`Reflect.getMetadata(type, DefineMetadata.staticMethod): ${p2}`)
console.log('')
console.log(`Reflect.getMetadata(type, DefineMetadata.prototype.getName): ${p3}`)
console.log('')
console.log(`Reflect.getMetadata(type, DefineMetadata, 'staticProperty'): ${p4}`)