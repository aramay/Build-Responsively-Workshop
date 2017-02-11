Animal = {
    init: function(name){
        this.name = name;
    },
    eats: function(){
        return this.name + "is eating"
    }
}

Chordate = Object.create(
    Animal,
    {
        has_spine: { value: true }
    }
)

/** this approach is too expensive, necessarily does the same this as NEW method */