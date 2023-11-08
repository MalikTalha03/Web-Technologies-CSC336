/* //Callback Functions
function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

function cal(n,m,myCallback){
    let sum = n+m;
    myCallback(sum);
}

cal(5,5,myDisplayer);*/

//Async
function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

let myPromise = new Promise(function(myResolve,myReject){
    document.getElementById("btn").addEventListener("click",function(){
    let x = document.getElementById("inp").value;
    let y = ["fajita","tacos","burrito"]
    if(y.includes(x)){
        myResolve("We have "+x);
    }
    else{
        myReject("We don't have "+x);
    }
});
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);