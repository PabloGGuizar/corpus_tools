<a name=”top″></a>
# Corpus Tools
Corpus Tools is a simple NPM package for performing corpus linguistic analysis. This package includes the next tools:
* [Tokenizer Tool](#tokenizer)
* [Concordance Tool](#concordance)
* [N-Gram and Clusters Tools](#n_gram)
## Getting started
### Install
```shell 
npm install corpus-tools
```
### Use
```javascript
const ct = require('./index.js');
const text = 'Colorless green ideas sleep furiously';

const tokensList = ct.tokens(text);

console.log(tokensList); // [ 'Colorless', 'green', 'ideas', 'sleep', 'furiously' ]
```
With 'fs' module:
```javascript
const fs = require('fs');
const ct = require('./index.js');

filePath = './path.txt';
const text = fs.readFileSync(filePath, 'utf-8');

const tokensList = ct.tokens(text);
````
## Examples
<a name=”tokenizer″></a>
### TOKENS
Extracting tokens from a text:
```javascript
const tokensList = ct.tokens(text);
console.log(tokensList); // [ 'Colorless', 'green', 'ideas', 'sleep', 'furiously' ]
```
Counting tokens in text:
```javascript
const tokensCount = tokensList.length;
console.log(tokensCount); // 5
```
### TYPES
Extracting types from a text:
```javascript
const typesList = ct.types(text);
console.log(typesList); // { colorless: 1, green: 1, ideas: 1, sleep: 1, furiously: 1 }
```
 Counting types:
```javascript
const typesCount = Object.keys(typesList).length;
console.log(typesCount); // 5
```
Absolute frequency of a type:
```javascript
console.log(typesList["sleep"]); // 1
```
Lexical richness of a text:
```javascript
const lexicalRichness = ct.richness(text);
console.log(lexicalRichness); // 1
```
<a name=”concordance″></a>
### CONCORDANCE
'KWIC' (KeyWord In Context):
```javascript
const concordance = ct.concordance(text, "sleep", 12);
console.log(concordance); // [ 'green ideas sleep furiously' ]
```
<a name=”n_gram″></a>
### N-GRAMS
2-grams:
```javascript
const brigrams = ct.n_gram(text, 2);
console.log(brigrams); // [ 'Colorless green', 'green ideas', 'ideas sleep', 'sleep furiously' ]
```
3-grams to 4-grams:
```javascript
const n_grams = ct.n_gram(text, 3, 4);
console.log(n_grams);
/* [
  'Colorless green ideas',
  'Colorless green ideas sleep',
  'green ideas sleep',
  'green ideas sleep furiously',
  'ideas sleep furiously'
] */
```
### CLUSTERS
Left clusters:
```javascript
const clustersLeft = ct.clusters(text, "ideas", "l", 2, 3);
console.log(clustersLeft); // [ 'ideas sleep', 'ideas sleep furiously' ]
```
Right clusters:
```javascript
const clustersRigth = ct.clusters(text, "furiously", "r", 2, 4);
console.log(clustersRigth);
/* [
  'green ideas sleep furiously',
  'ideas sleep furiously',
  'sleep furiously'
] */
```
## License
Copyright (c) 2021, Pablo G. Guízar <pablogguizar@gmail.com>.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.