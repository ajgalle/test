
// first, Lets get all them dogs.
//const dogChart = document.getElementById("printTarget");
    //fetch("https://dog.ceo/api/breeds/image/random");

//const printTgt=document.getElementById("printTarget");

const dogImgDiv = document.getElementById("dogImgDiv");
const btnDog = document.getElementById("btnDog");

btnDog.addEventListener("click", getInfo);

function getInfo(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then(data=>generateImageFromURL(data.message));
        
}
    
        
        
        


function generateImageFromURL(dogUrl)
{
    const html= `
        <img style="height:200px;width:200px;" src=${dogUrl} alt="${dogUrl}">
        <p> Click for another!</p>`;
    
    dogImgDiv.innerHTML=html;
    
    
}

function errorReport()
{
    alert("Something went wrong!");
}

