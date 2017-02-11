function proto(args){

    console.log(args)
}

Animal = function(name){
    return this.name = name
}

Animal.prototype.eats = function(){
    return this.name + " eating"
}



Chordate = function(name){
    return this.name = name
}

Chordate.prototype = new Animal()

Chordate.prototype.has_spine = true;





Mamal = function(name){
    // return this.name = name
    Chordate.call(this, name)
}

Mamal.prototype = new Chordate()

Mamal.prototype.hasHair = true


var y = new Animal("animal")

var x = new Chordate("Chordate")

var m = new Mamal("dog")


console.log(x)
console.log(m)