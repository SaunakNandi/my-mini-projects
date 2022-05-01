const panel=document.querySelectorAll('.panel')

panel.forEach((p)=>{
    p.addEventListener('click',()=>{
        removeActiveClass()
        p.classList.add('active')
    }) 
})

function removeActiveClass()
{
    panel.forEach((p)=>{
        p.classList.remove('active')
    })
}