const url = 'https://noroff-api-docs.netlify.app/basic-endpoints/jokes'

async function getData(){
 const response = await fetch(url)
 console.log(response)
}

getData()