const cup = document.getElementById("cup");
const smallcups = document.querySelectorAll(".cup-small");
const per = document.getElementById("percentage")
const rem = document.getElementById("remained")
const litre = document.getElementById("liters")
let liter = 2
litre.innerText = `${liter}L`
let heightp= 0;
let cupsclicked = 0

smallcups.forEach((scup,index)=>{
    scup.addEventListener('click',()=>{
        cupsclicked = index + 1;
        updatecups();
    })
})

function updatecups(){
    heightp = cupsclicked/smallcups.length * 100 ;
    per.style.height = `${heightp}%`
    per.innerText = `${heightp}%`;
    liter = 2 - (250 * cupsclicked / 1000);
    litre.innerText = `${liter}L`

    if(cupsclicked === smallcups.length){
        rem.style.display = "none";
    }
    else {
        rem.style.display  = "block";
    }

    smallcups.forEach((scup,index)=>{
        if(index < cupsclicked){
            scup.classList.add("full")
        }
        else {
            scup.classList.remove("full")
        }
    })
}

updatecups();