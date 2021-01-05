const boxs = document.querySelectorAll('.box')

boxs.forEach((box) =>{
    box.addEventListener('click', () => {
        removeActive()
        box.classList.add('active')
    })
})

function removeActive() {
    boxs.forEach((box) =>{
        box.classList.remove('active')
    })
}