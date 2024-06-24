let a = +prompt('qiymet qeyd edin:')
let b = +prompt('qiymet qeyd edin:')
let c = (a + b) * 2

let netice = 'Bir terefi ' + a +  " olan bir terfi " + b + " olan duzbucaqlinin perimetri " + c + ' beraberdir'

document.getElementById('perimetr').innerHTML = netice
