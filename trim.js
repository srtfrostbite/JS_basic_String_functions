let hooman = '          Homo sapiens          '



// Trim basic:

// let species = []
let trimmed = ''
let trimmer = ' '
// let counter = 1

for (let i = 0; i < hooman.length; i++) {
    if (hooman[i] !== trimmer) {
        trimmed += hooman[i]

    } 
}

console.log(trimmed)