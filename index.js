function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function named(){
        console.log('This is a named function')
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('This is an anonymous function')
    }
}