// Scroll to top

const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
})

// window.addEventListener('scroll',()=>{
//     if(window.screenY >= 700) {
//         scrolltp.style.opacity = 1;
//     }
//     else {
//         scrolltp.style.opacity = 0;
//     }
// })



// Dark Theme

const themeToggle = document.querySelector('.checkbox'),
      body = document.querySelector("body"),
      darkmode = localStorage.getItem('dark');
    //   checkbox = document
if(darkmode) {
    body.classList.add('dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change',()=>{
    body.classList.toggle('dark');

    if(body.classList.contains('dark')) {
        localStorage.setItem('dark', 'active');
    }
    else {
        localStorage.removeItem('dark');
    }
});