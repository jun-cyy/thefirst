
        const current = document.querySelector('#current');
        const imgs = document.querySelectorAll('.imgs img');
        const opa = 0.4;
        imgs.forEach(img=>
        img.addEventListener('click',imgClick)
        );

function imgClick( e){
    imgs.forEach(img=>(img.style.opacity=1));
    current.src = e.target.src;
    current.classList.add('fade-in');
    setTimeout(()=>current.classList.remove('fade-in'),500);
    e.target.style.opacity = opa;
    console.log(current);
}

imgs[0].style.opacity = opa; 

    
    





