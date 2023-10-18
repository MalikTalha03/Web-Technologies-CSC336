const parent = document.getElementById("par");
let child = parent.firstElementChild;
const nextbtn = document.getElementById('nxtBtn')
const prevbtn = document.getElementById('preBtn')

function forward() {
    if(child.previousElementSibling==null){
        prevbtn.disabled=false;
    }
    if(child.classList.contains('active'))
    {
        child=child.nextElementSibling;
        child.classList.toggle('active');
        if(child.nextElementSibling==null){
            nextbtn.disabled=true;
            return;
        }
        else {
            child=child.nextElementSibling;
            child.classList.toggle('active');
        }
    }
    else {
        child.classList.toggle('active');
        child=child.nextElementSibling;
        child.classList.toggle('active');
    }
}

function previous() {
    if(child.nextElementSibling==null){
        nextbtn.disabled=false;
    }
    if(child.classList.contains('active'))
    {
        child.classList.remove('active');
        child=child.previousElementSibling;
        child.classList.remove('active');
    }
    else {
        if(child.previousElementSibling) {
            child=child.previousElementSibling;
            child.classList.remove('active');
            if(child.previousElementSibling==null){
                prevbtn.disabled=true;
                return;
            }
            else {
                child=child.previousElementSibling;
                child.classList.remove('active');
            }
        }
    }
}