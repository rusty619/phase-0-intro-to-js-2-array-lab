// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = (name) => {
    cats.push(name)
}

let destructivelyPrependCat = (name) => {
    cats.unshift(name)
}

let destructivelyRemoveLastCat = () => {
    cats.pop()
}

let destructivelyRemoveFirstCat = () => {
    cats.shift()
}

let appendCat = (name) => {
    var newCats = [...cats,name]
    return newCats
} 

let prependCat = (name) => {
    var newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

let removeLastCat = () => {
    var newCats = [...cats]
    newCats.pop()
    return newCats
}

let removeFirstCat = () => {
    var newCats = [...cats]
    newCats.shift()
    return newCats
}
