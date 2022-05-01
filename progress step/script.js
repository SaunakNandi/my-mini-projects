const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circle=document.querySelectorAll('.circle')  // allows to use forEach

let curActive=1  // mark the active circles

// Update the progress bar

let update=()=>{
    circle.forEach((circle,idx)=>{
        if(idx<curActive)
            circle.classList.add('active')
        else
            circle.classList.remove('active')
    })
     
    const active=document.querySelectorAll('.active')
    progress.style.width=((active.length-1)/(circle.length-1))*100+'%'

    // button enable and disable
    
    if(curActive===1)
        prev.disabled=true
    else if(curActive===circle.length)
        next.disabled=true;
    else{
        prev.disabled=false
        next.disabled=false
    }
}

// Next and Prev buttom

next.addEventListener('click',()=>{
    
    curActive++
    if(curActive>circle.length)
        curActive=circle.length  
    
    update()
})

prev.addEventListener('click',()=>{
    curActive--
    if(curActive<1)
        curActive=1  

    update()
})