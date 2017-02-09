
const data = [];

console.log(data)

//fetch data from local file
fetch("data.json")
    .then(blob => blob.json())
    .then(content => data.push(...content))



//filter data based on is_published falg
function isPublished(){
    console.log(data)
    
    return data.filter(content => {

        return content.is_published === true
    })

}


//display content in DOM
function displayContent(){

    var results = isPublished()

    const template = document.querySelector(".plan")
    const feature = document.querySelector(".features")


    var img = document.createElement("img")
    var title = document.createElement("h1")
    // var title = document.createElement("h1")
    var desc = document.createElement("p")

    for(var i=0; i<results.length; i++){

        img.setAttribute("src", "./images/"+results[i].image_name)
        title.innerHTML = results[i].title
        desc.innerHTML = results[i].description


    }

    template.prepend(title)
    template.prepend(img)
    feature.append(desc)

    console.log(template)


}

window.addEventListener("load", displayContent)