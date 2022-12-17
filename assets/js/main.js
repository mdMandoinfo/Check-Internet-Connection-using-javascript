let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

window.addEventListener("online", function(){
   onLine(); 
});
window.addEventListener("offline", function(){
    offLine(); 
});

reload.onclick = function(){
    window.location.reload();
}
function onLine(){
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}
function offLine(){
    title.innerHTML = 'Error No Internet';
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}
