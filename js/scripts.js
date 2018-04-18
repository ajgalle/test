//const select = document.getElementById('breeds');
//const card = document.querySelector('.card');
//const form = document.querySelector('form');

fetch("https://dog.ceo/api/breeds/list/all").then(gotInfo,errorFunction);


gotInfo(response)
{
  console.log(response)
}
errorFunction()
{
  alert("Something went wrong.");
}