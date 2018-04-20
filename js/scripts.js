
// first, fill the drop down list of dogbreeds

const breedList=document.getElementById("breedList");

fetch("https://dog.ceo/api/breeds/list")
    .then(response=>response.json())
    .then(data=>fillOptions(data.message))
    .catch(errorReport)
    
function fillOptions(data)
{
    
    const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  breedList.innerHTML = options;
}

// Now, if the user clicks the button, generate a random dog image

const dogImgDiv = document.getElementById("dogImgDiv");
const btnDog = document.getElementById("btnDog");

btnDog.addEventListener("click", getInfo);

function getInfo(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then(data=>generateImageFromURL(data.message))
        .catch(errorReport);
        
}


function generateImageFromURL(dogUrl)
{
    const html= `
        <img style="height:200px;width:200px;" src=${dogUrl} alt="${dogUrl}">
        <p> Click for another!</p>`;
    
    dogImgDiv.innerHTML=html;
    
    
}

// Now, lets make it so the user can call dog images only from the one selected in the drop down list. 

const specificBtn = document.getElementById("specificBreedButton");
specificBtn.addEventListener("click",specificDog);
//breedList
const specificDogDisplay= document.getElementById("specificDogDisplay");

function specificDog(){
    const selectedDog=breedList.value;
    
    console.log(selectedDog);
   
   

  
     const thingToFetch =  "https://dog.ceo/api/breed/"+selectedDog+"/images/random";    
    fetch(thingToFetch)
        .then(response=>response.json())
        .then(data=>renderSpecificDog(data.message))
    
}
function renderSpecificDog(data)
{
    specificDogDisplay.innerHTML = `
        <img src=${data} alt="${data}">
        <p>${data}</p>
    `
}






function errorReport()
{
    alert("Something went wrong!");
}

