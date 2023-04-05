let menu = document.querySelector('#menu');
let navlist = document.getElementById('nav-list');
let  companyFeatures = document.querySelector('#companyFeatures');
let companyDropdown = document.querySelector('#company-dropDown');

// company drop down features

companyFeatures.addEventListener('click', ()=>{
    companyDropdown.classList.toggle('features-content')
})

let navl = document.getElementById('nav-l');

menu.addEventListener('click', ()=>{
    navl.classList.toggle('nav-l')
    })

// features dropdown on click
let features = document.querySelector('#features')
let dropDown = document.querySelector('#features-dropDown')

features.addEventListener('click', () =>{
    dropDown.classList.toggle('features-content')
    
})


// hamburger menu 

function changeMenu(){
    let menu1 = document.getElementById('menu-open');
     let menu2 = document.getElementById('menu-close');

if (menu2.classList.contains('hidden')){
    menu2.classList.remove('hidden');

    menu1.classList.add('hidden');
    

}
else{
    menu2.classList.add('hidden');

    menu1.classList.remove('hidden')
    
}
}


function changeArrows(){
    let downArrow = document.getElementById('downArrow');
    let upArrow = document.getElementById('upArrow');

    if(upArrow.classList.contains('hidden')){
        upArrow.classList.remove('hidden')
        downArrow.classList.add('hidden')
    }
    else{
        upArrow.classList.add('hidden')
        downArrow.classList.remove('hidden')
    }

}


function changeArrows2(){
    let downArrow = document.getElementById('downArrow1');
    let upArrow = document.getElementById('upArrow1');

    if(upArrow.classList.contains('hidden')){
        upArrow.classList.remove('hidden')
        downArrow.classList.add('hidden')
    }
    else{
        upArrow.classList.add('hidden')
        downArrow.classList.remove('hidden')
    }

}