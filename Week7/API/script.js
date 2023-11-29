urlg = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gi8jQCUhcxqA2as0y3XP/scores/';
const res = ()=>{
    fetch(urlg, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then((response)=>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data)=>{
        const sc = document.getElementById('score');
        data.result.forEach(element => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.innerHTML = element.user;
            td2.innerHTML = element.score;
            tr.appendChild(td1);
            tr.appendChild(td2);
            sc.appendChild(tr);

        });
    })
}

const post = ()=>{
    fetch(urlg, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ user: 'Aqeel', score: 50 }),
    })
    
}

res();
post();