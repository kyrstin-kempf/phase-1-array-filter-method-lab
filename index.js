// Code your solution here

function findMatching(drivers,string) {
    return drivers.filter(el => el.toUpperCase() === string.toUpperCase())
}


function fuzzyMatch(drivers, string) {
    return drivers.filter(name => name.substring(0,1) === string.substring(0,1))
}

function matchName(drivers, string) {
    return drivers.filter(property => property.name === string)
}