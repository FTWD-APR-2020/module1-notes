// this will provide the "superpower" of hoisting
// legacy (i.e. old) code will have this
function func1(){
  return "hi"
}

// this will not have hoisting
const func2 = function() {
  return "hi"
}


// this will not have hoisting
const func3 = () => {
  return "hi"
}

// this will not have hoisting
// most common now
// here the return is implide so you don't have 
// to use return or curly braces
const func4 = () => 'hi'


// console.log(func4())

// theFridge initially has 3 elements 
const theFridge = ["nutella", "cold stone", "vegan pizza"]

theFridge.push("David")     // adds to the end of the array
console.log(theFridge)

// replace David with cookies
theFridge[3] = "cookies"
// why 3? 
console.log(theFridge)

// theFridge.unshift("Niko")   // adds to the beginning of the array