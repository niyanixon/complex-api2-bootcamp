
//artist name
//https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay
//enter a name and it guesses the gender
//https://api.genderize.io?name=peter

document.querySelector('button').addEventListener('click', genderFind)

function genderFind(){
    const userInput = document.querySelector('input').value
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${userInput}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.artists[0].strArtist)
    fetch(`https://api.genderize.io?name=${data.artists[0].strArtist}`)
      .then(response => response.json())
      .then(dataTwo => {
       console.log(dataTwo)
       console.log(dataTwo.gender)

       document.querySelector('.name').innerText = dataTwo.name
       document.querySelector('.gender').innerText = dataTwo.gender
    
      })
      .catch(error => {
        console.log(`${error}`)
      });
      })
      .catch(error => {
        console.log(`${error}`)
      });

}
