const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

let newCats
const appendCat = name => newCats = [...cats, name]

const prependCat = name => newCats = [name, ...cats]

const removeLastCat = () => newCats = cats.slice(0, cats.length -1)

const removeFirstCat = () => newCats = cats.slice(1)