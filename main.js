window.addEventListener('scroll',reveal)

function reveal(){
    var r=document.querySelectorAll('.reveal');
    var i;
    for(i=0;i<r.length;i++){
        if(r[i].getBoundingClientRect().top<window.innerHeight){
            r[i].classList.add('active');
        }else{
            r[i].classList.remove('active');
        }
    }

}