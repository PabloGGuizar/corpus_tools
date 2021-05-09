const tk = require('./tokenizer.js');

const tokens = tk.tokens;

function n_gram(texto, min = 2, max = min) {
    const tokensLista = tokens(texto);
    const n_gramList = [];

    tokensLista.forEach(type => {
        let i = tokensLista.indexOf(type)
        let j = min;
        while (j <= max) {
            let n_gram = tokensLista.slice(i, i+j)
            if (n_gram.length >= min && n_gramList.includes(n_gram.join(' ')) == false) {
                n_gramList.push(n_gram.join(' '));
            }
            j++;
        }
    });

    return n_gramList;
}

function clusters(texto, word, side, min, max,) {
    const n_gramList = n_gram(texto, min, max);
    const clustersLista = [];

   n_gramList.forEach(n_gram =>{
       if (side == 'left' || side == 'l') {
           if(n_gram.includes(word + ' ') && n_gram.indexOf(word) == 0) {
               clustersLista.push(n_gram)
           }
        } else if (side == 'right' || side == 'r') {
            if(n_gram.includes(' ' + word) && (n_gram.indexOf(word)+ word.length) == n_gram.length) {
                clustersLista.push(n_gram)
            }
       }
   })

    return clustersLista;
}

module.exports = { n_gram, clusters }