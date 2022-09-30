function test(argument){

if (argument===undefined) {
    console.log("No argument")
} else {
    console.log("Argument found")
}

}

function test2(argument){

    if (argument===undefined) {
        console.log("No argument")
    } else {
        console.log(argument)
    }
    
}

function test3(argument, argument2){
        console.log(argument, "is", argument2)        
}

function test4(argument){

    if (isNaN(argument)) {
        console.log("Not a number")
    } else {
        console.log("My number:", argument)
    }
    
}

function test5(argument){

    if (typeof argument ==='number') {
        console.log("My number is:", argument)
    } else {
        console.log("Not a number")
    }
    
}

function test6(){
    const x=["C is fun", "Python is cool", "Javascript is amazing"]
    x.forEach(Element => console.log(Element))
    
}