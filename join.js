let hooman = ['H','o','m','o',' ','s','a','p','i','e','n','s']

let joint = ''
// let joint = '-'

let final_str = ''

for (let i = 0; i < hooman.length; i++) {
    final_str += joint + hooman[i]
}

console.log(final_str)