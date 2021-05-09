function concordance(texto, palabra, length = 30) {
    const newPalabra = palabra.replace(' ', '[\\p{P} ]+')
    const regexp = new RegExp('(^| )\\p{P}?' + newPalabra + '\\p{P}?( |$)', 'gmui');

    const search = texto.matchAll(regexp);
    const searchResult = [...search];

    const concordanceList = [];

    searchResult.forEach (res => {
        const i = res[0].toLowerCase().indexOf(palabra.toLowerCase());
        const left = res.index + i - length;
        const right = res.index + i + palabra.length + length;

        if (left >= 0 && right < texto.length) {
            concordanceList.push(texto.slice(left, right))
        } else if (left < 0 && right < texto.length){
            concordanceList.push(texto.slice(0, right))
        } else if (left < 0 && right > texto.length){
            concordanceList.push(texto.slice(0, texto.length))
        } else if (left >= 0 && right > texto.length){
            concordanceList.push(texto.slice(left, texto.length))    
        }
    })

    return concordanceList;
};

module.exports = concordance;
