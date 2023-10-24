const cup = document.getElementById("cup");
const smallcups = document.querySelectorAll(".cup-small");
const per = document.getElementById("percentage")

smallcups.forEach((scup)=> {
    scup.addEventListener('click',()=>{
        scup.classList.toggle("full");
        
    })
});

