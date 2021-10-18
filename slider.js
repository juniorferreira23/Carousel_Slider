let index = 0

show_slide = (i) => {
    index += i

    const images = document.querySelectorAll('.image')
    const dots = document.querySelectorAll('.dot')

    for(i = 0; i < images.length; i++){
        images[i].style.display = 'none'
    }

    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active')
    }

    if(index > images.length - 1){
        index = 0
    }

    if(index < 0){
        index = images.length - 1
    }

    images[index].style.display = 'block'
    dots[index].classList.add('active')
}

window.onload = show_slide(index)