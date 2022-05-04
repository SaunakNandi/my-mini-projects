const contents=document.querySelectorAll('.content')
const listItems=document.querySelectorAll('li')

listItems.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        hideContent()
        hideItem()

        item.classList.add('active')
        contents[i].classList.add('show')
    })
    console.log(listItems)
})

function hideContent()
{
    contents.forEach(x=> x.classList.remove('show'))
}

function hideItem()
{
    listItems.forEach(x=> x.classList.remove('active'))
}