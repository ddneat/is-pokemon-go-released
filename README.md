# Is Pokémon Go Released

> Check if Pokémon GO is officially released in a certain country.

## Install

```
npm install --save is-pokemon-go-released
```

## Usage

```js
const isReleased = require('is-pokemon-go-released')

isReleased('us')
  .then(result => console.log(result))
// => true
```

## Example

```
npm start --country='de'
// => false
```

## The cURL Way

```
curl -s https://itunes.apple.com/search\?term\=pokemongo\&country\=us\&entity\=software | grep id1094591345 | wc -l
// => false
```

## Related

[is-pokemon-go-up](https://github.com/sotojuan/is-pokemon-go-up/blob/master/readme.md)

## Licence
 
MIT © David Neubauer

GO GO GO catch 'em all 🏃
