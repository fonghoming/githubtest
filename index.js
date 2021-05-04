

let input = prompt("Enter some words");

let refined = [];
let refinedCount = [];

input
    .split(' ')
    .filter(word => !word.includes(" ") && word != '' ) //remove "space" words
    .forEach(word => {
        if (refined.indexOf(word) == -1) {
            refined.push(word);
            refinedCount.push(1);
        }
        else refinedCount[refined.indexOf(word)]++;
    });

refined.forEach( (word, index) => {
    console.log(`${word} (${refinedCount[index]}) `)
});

refined.forEach( (word, index) => {
    document.write(`${word} (${refinedCount[index]}) `)
});