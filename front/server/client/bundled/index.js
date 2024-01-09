// setTimeout(() => {
//     alert('holaaaaaaaaaaaa')
// }, 3000)

const myDiv = window.document.getElementById('hey')

myDiv.style.background = 'green'

fetch('http://localhost:3000/data').then(async _data => {
    console.log(_data)
    const data = await _data.json()
    setTimeout(() => {
        myDiv.innerHTML = `${data.name} ${data.lastname} was the best when he was ${data.age}`
    }, 5000)
    
}).catch(e => {
    console.error(e)
})