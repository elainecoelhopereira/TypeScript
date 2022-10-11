// tipagem no TypeScript

//tipagem implícita
let username = `shaolin_+matador_de_porco`
username = `flavioDoPneu`

// tipagem explicita
let pi: number = 3.1415
let logado: boolean = true

//union types
let rg: number | string | boolean = 0771346578
rg = `0771346578`

let generico: any = []
generico = {
    a: ``,
    b: 8,
    c: true
}
generico = `Eu sou generico`
generico = 6.89

const listaDeNomes: string[] = [`João Pedro`, `Cesar`, `Vitor`, `Claudia`, `Vitoria`, `Larissa`]
listaDeNomes.push(`Roberta`)

const notas: number[] = [1,2,3,4,5,6,7,8,9,10]
notas.push(`iaioi`)

const valores: Array < string | number> = [`lçrsd`, 77, `256485`, 1259585]
const array: Array < booleans > = [true, false, true, false, true, true]
const lista: Array<any> = [1, true, [], {}, `ksidkeld`]
const lista2 = any[] = [1, true, [], {}, `ksidkeld`]