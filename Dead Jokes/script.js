const joke=document.querySelector('#joke')
const jokeBtn=document.querySelector('#jokeBtn')

const url='https://icanhazdadjoke.com'

async function generateJoke()
{
    // the header is required for this api otherwise u will get a html in response
    const config={
        headers:{
            Accept: 'application/json',
        },
    }

    const res=await fetch(url,config)
    const response=await res.json()
    console.log(response)

    joke.textContent=response.joke
}

jokeBtn.addEventListener('click',generateJoke)