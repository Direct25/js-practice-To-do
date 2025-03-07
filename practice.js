function changeBackground(color){   //that's why made changes
    document.body.style.backgroundColor=color;
}

//DRY principle violate 

// function changebgwhite(){
//     document.body.style.backgroundColor='white'
// }

const themebtn=document.getElementById('theme-btn');

themebtn.addEventListener('click', ()=> {
    console.log(document.body.style.backgroundColor);
    const currentcolor= document.body.style.backgroundColor;

    if(!currentcolor  || currentcolor=='white'){
        changeBackground('black');
        themebtn.innerText='Light mode';
    } else{
        changeBackground('white');
        themebtn.innerText='Dark mode';
    }
});

