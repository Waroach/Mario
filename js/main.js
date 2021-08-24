// Example Fetch Code
// fetch(`URL Goes Here`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// Example Array Iterations
// let bestColors= ['green', 'blue', 'yellow', 'black', 'red']
// bestColors.forEach( (x,i) => console.log(x) )

reverseString('algorithms') // should return 'smhtirogla'

function reverseString(text){
    // return text.split('').reverse().join('')
    // ********** OR **********
    // return [...text].reverse().join('')
    // ********** OR **********
    let array = text.split('')
    let reverse = []
    for (i=0; i< array.length; i++) {
        reverse.unshift[i]
    }
    return reverse.join('')
    console.log(reverse)
}