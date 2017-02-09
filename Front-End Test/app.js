
const data = [];

console.log(data)

//fetch data from local file
fetch("data.json")
    .then(blob => blob.json())
    .then(content => data.push(...content))



//filter data based on is_published flag
function isPublished(){
    console.log(data)
    
    return data.filter(content => {

        return content.is_published === true
    })

}


//display content in DOM
function displayContent(){

    var results = isPublished()

    console.log(results)

    

    // var img = document.createElement("img")
    // var title = document.createElement("h1")
    // // var title = document.createElement("h1")
    // var desc = document.createElement("p")


    for(var i=0; i<results.length; i++){
        
        var grid = document.querySelector(".grid")

        // var feature = document.querySelector(".features")
        // var template = document.querySelector(".plan")

        // container to hold individual items
        var div = document.createElement("div")
        //set className to div container
        div.className = "plan"

        var ul = document.createElement("ul")
        ul.className = "features"


        
        var img = document.createElement("img")
        var title = document.createElement("h1")
        // var title = document.createElement("h1")
        var desc = document.createElement("p")

        img.setAttribute("src", "./images/"+results[i].image_name)
        title.innerHTML = results[i].title
        desc.innerHTML = results[i].description

        //append img and title to div "plan" container
        div.appendChild(img)
        div.appendChild(title)

        //append img description to ul "feature" container
        ul.append(desc)
        //append to div "plan" container as child
        div.append(ul)
        
        grid.append(div)
        // grid.append(template)

        // template.prepend(title)
        // template.prepend(img)
        // feature.append(desc)


        // console.log(template)


        // img.setAttribute("src", "./images/"+results[i].image_name)
        // title.innerHTML = results[i].title
        // desc.innerHTML = results[i].description

        // var gridContainer = document.createElement("div")



        // template.prepend(title)
        // template.prepend(img)
        // feature.append(desc)


    }


    // console.log(template)


}

window.addEventListener("load", displayContent)