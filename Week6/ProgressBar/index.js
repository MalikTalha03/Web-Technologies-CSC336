const parent = document.getElementById("par");
let child = parent.firstElementChild;

function forward() {
    if(child.classList.contains('active'))
    {
        if(child.nextElementSibling !=null) {
            child=child.nextElementSibling;
            child.classList.toggle('active');
            if(child.nextElementSibling==null)
                return;
            else {
                child=child.nextElementSibling;
                child.classList.toggle('active');
            }
        }
        else {
            return;
        }
    }
    else {
        child.classList.toggle('active');
        child=child.nextElementSibling;
        child.classList.toggle('active');
    }
}

function previous() {
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
            if(child.previousElementSibling==null)
                return;
            else {
                child=child.previousElementSibling;
                child.classList.remove('active');
            }
        }
    }
}