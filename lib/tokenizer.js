function tokens(texto) {
    const regexp = new RegExp(/(?<token>[^\p{P}\n ]+)/, 'gmu');
    const wordsList = texto.match(regexp);

    return wordsList;
}

function types(texto) {
    const tokensList = tokens(texto.toLowerCase());
    const typesList = {};
    
    tokensList.forEach(type => {
        typesList[type] =  (typesList[type] || 0 ) +1;
    })

    return typesList;
}; 

function richness(texto) {
    const tokensList = tokens(texto);
    const typesList = types(texto);

    const lexicalRichness = Object.keys(typesList).length / tokensList.length;

    return lexicalRichness;
}

module.exports = { tokens, types, richness };