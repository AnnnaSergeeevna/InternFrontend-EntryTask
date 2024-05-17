import { encoded, translations } from './data.js';

console.log("Let's rock");

let enc = encoded;
let trns = translations;
function fieldTranscripts(enc, trns) {
    return enc.map(obj => {
        let newObj = {};
        for (let key in obj) {
            if (key === 'groupId' || key === 'service' || key === 'formatSize' || key === 'ca') {
                newObj[key] = obj[key]
            } else if (trns.hasOwnProperty(obj[key])) {
                newObj[key] = trns[obj[key]];
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    });
}
console.log(fieldTranscripts(enc, trns));

const aloneIds = [...new Set(encoded.map(item => Object.values(item)).flat())];
console.log(aloneIds);


// console.log("Let's rock");
// console.log(encoded, translations);

