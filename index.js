document.querySelector("#output").style.visibility = 'hidden'

document.querySelector('#WeightInput').addEventListener('input' , (e) => {
    document.querySelector("#output").style.visibility = 'visible'

    let pounds = e.target.value 
    document.querySelector("#Ingrams").innerHTML = 453.5924*pounds
    document.querySelector('#Inkilograms').innerHTML = 0.4535924*pounds 
    document.querySelector('#Inounces').innerHTML = 16*pounds
    document.querySelector('#Intons').innerHTML = (5e-4)*pounds
    document.querySelector('#Incarats').innerHTML = 2267.962*pounds
})