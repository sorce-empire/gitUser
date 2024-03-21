document.getElementById('search').addEventListener('click', async(e)=>{
    e.preventDefault()
    const input = document.querySelector('.user').value;
    const baseUrl = `https://api.github.com/users/${input}`
    await fetch(baseUrl)
    .then(res => res.json())
    .then(info => {
        console.log(info)
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `
            <h2>${data.login}</h2>
            <img src="${data.avater_url} "width="100%">`;
    })
    .catch(error =>{
        console.error(error);
            alert("User not Found")
    })
})



