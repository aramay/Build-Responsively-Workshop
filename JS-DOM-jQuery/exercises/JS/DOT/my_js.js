// 05 Context
DOT = function(obj, prop){
    console.log(obj)
    if(obj.hasOwnProperty(prop)){
        console.log(obj[prop])
        return obj[prop]
    }else{
        return DOT(obj.__proto__,prop)
    }
}

// 05 Context
DOTCALL = function(obj, prop, args){
    
    var x = DOT(obj, prop)
    
    // console.log(x())

    if(x){
        return x.call(obj,args)
    }    

}

// 06 Prototypes
NEW = function(constructor, args){

    //create a new object
    //set new object's __proto__ to constructor prototype
    //invoke our constructor with our new object as context
    //return out new object

    var o = {}

    o.__proto__ = constructor.prototype;

    var returnValue = constructor.apply(o, args)

    return o;

}

INSTANCEOF = function(obj, constructor){

    if(obj.__proto__ === constructor){
        return true
    }
    else if(obj.__proto__){
        return INSTANCEOF(obj.__proto__, constructor)
    }
    else{
        return false
    }
}

//Person constructor
var Person = function(name){
    this.name = name
}

//Person prototype property
Person.prototype.isPerson = true;

Person.prototype.speak = function(){
    console.log("Hello ", this.name)
}

var person = new Person("john")

DOT(person, 'name')

DOTCALL(person, 'speak', [])


INSTANCEOF(person, Person)

console.log(person)