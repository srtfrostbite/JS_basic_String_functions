let hooman = 'Australopithecus afarensis,          Homo habilis,          Homo erectus,          Homo sapiens'

let species = []
let names = ''

// let splitter = ',          '
let splitter = ''
// let splitter = '  '
// let splitter = ' '
// let splitter = ', '

let counter = 1

for (let i = 0; i <= hooman.length; i++) {
    if (splitter.length > 0) {
        if (hooman[i] === splitter[0]) {
            for (let j = 1; j < splitter.length; j++)
                if (hooman[i+j] === splitter[j]) {
                    counter++
                    if (counter === splitter.length) {
                        species.push(names)
                        names = ''
                        counter = 1
                        i += j
                    }
                } else {
                    break
                }

        } else if (i === hooman.length) {
            species.push(names)
        }
        else {
            names += hooman[i]
        }
    } else
        species.push(hooman[i])

}

console.log(species)