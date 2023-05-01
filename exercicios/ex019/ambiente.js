let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()
num.push(1)

console.log(num)
console.log(`O vetro tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}