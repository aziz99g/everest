let close = document.querySelector('.close')
let open = document.querySelector('.open')
let form = document.querySelector('.form')
let bg = document.querySelector('.bg')

open.onclick = () =>{
    form.classList.toggle('active')
    bg.classList.toggle('active')
}

close.onclick = () =>{
    form.classList.toggle('active')
    bg.classList.toggle('active')
}
