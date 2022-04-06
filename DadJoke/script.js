//jokeEl element is id of joke
const jokeEl=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')


jokeBtn.addEventListener('click',generateJoke)
generateJoke()
//using async await
async function generateJoke(){
  const config={
    headers:{
      'Accept':'application/json'
    }
  }
  //calling the api with fetch using asuync
  const res=await fetch('https://icanhazdadjoke.com',config)
  //converting fetch joke (api) into json
  const data=await res.json()
  //store the joke (json) into data.joke
  jokeEl.innerHTML=data.joke;
}
//using.then
/*function generateJoke(){
  const config={
    headers:{
      'Accept':'application/json'
    }
  }
  fetch('https://icanhazdadjoke.com',config)
  .then((res)=>res.json())
  .then((data)=>{
    jokeEl.innerHTML=data.joke
  })
}*/
