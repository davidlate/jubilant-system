window.addEventListener('scroll', () =>{

    let header = document.querySelector('.header-container');
    let upper = document.querySelectorAll('.upper')
    let pos = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    let newHeight = 3*16 - pos/10;
    let newScale = 1-pos*.001;

    
    if (newHeight < 26) newHeight = 26;
    if (newScale < 0.85) newScale = 0.85;

    header.style.height= `${newHeight}px`;
    upper.forEach(div => {
        div.style.scale = `${newScale} `;
    })
    console.log(newHeight);
})