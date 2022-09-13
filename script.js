// https://csb-gwo8r.netlify.app/    homework

// dom
var data = document.createElement('div')
data.innerHTML= `<div class="allcountries"> list of countries </div>`
document.body.append(data)




var datum = document.querySelector(".allcountries")
// fetch data
fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((data)=> {
    for (let index in data){
        const{name} = data[index].name;
        allcountries.innerText= name;
    }
});
// .then((data1)=> {
//     allcountries.innerText= data1
// })


// let num ="name"