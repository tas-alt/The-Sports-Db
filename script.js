const loadSports = () => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php";
    fetch(url)
        .then(res => res.json())
        .then(data => displaySports(data))
}

loadSports();


const displaySports = sports => {
    for (const sport of sports.sports) {
        console.log(sport);
        const sportPic = `${sport.strSportThumb}`
        const sportsContainer = document.getElementById('sports-container');
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(228, 222, 222)';
        div.style.padding = '15px';
        div.style.margin = '10px 5px';
        div.style.border = '3px solid red';
        div.style.borderRadius = '15px';
        div.innerHTML = `
        <h2 style = "color: red;">Sports Name: ${sport.strSport}</h2>
        <img src =${sportPic} style = "display:block; margin:auto;">
        <p>Short Description: ${sport.strSportDescription}</p>
        `
        sportsContainer.appendChild(div);
    }
}