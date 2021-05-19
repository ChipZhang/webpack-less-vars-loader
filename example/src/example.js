import './style.less' // import as normal styles
import lessVars from './vars.less' // import as a key-value object, to access LESS variables

console.log({lessVars})
console.log({myJsVar1: lessVars.myJsVar1})
console.log({myJsVar2: lessVars.myJsVar2})
console.log({myJsVar3: lessVars.myJsVar3})
console.log({myJsVar4: lessVars.myJsVar4})
