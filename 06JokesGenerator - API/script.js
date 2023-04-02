const joke = document.getElementById('joke');
const button = document.getElementById('jokeBtn');
joke.innerText = ''


const setupEl = document.createElement('h4');
setupEl.style.color = 'hwb(284 0% 30% / 3)';
const punchLineEl = document.createElement('h5');
punchLineEl.style.color = 'rgb(54 99 118)';


joke.append(setupEl);
joke.append(punchLineEl);


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fcf64f92demsh48e340a82284ffep1c17f2jsn0de1b945fb17',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };

  const url = 'https://dad-jokes.p.rapidapi.com/random/joke';


const fetchjokes = async()=>{
    const data = await fetch(url,options);
    const realData = await data.json();
    return realData;
}


button.addEventListener('click', async()=>{

    setupEl.innerText = 'wait...';
    punchLineEl.innerText = '';
    const jokeData = await fetchjokes();

    setTimeout(() => {
        setupEl.innerText = jokeData.body[0].setup;
        punchLineEl.innerText = jokeData.body[0].punchline
    }, 1500);



})