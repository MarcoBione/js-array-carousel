//next img
function goNext(){
    //remove d-block from previous img
    document.querySelectorAll('.img-box')[currentCounter].classList.remove('d-block');
    
    if(currentCounter === imgContainer.length -1){
        currentCounter = 0;
    }else{
        currentCounter++;
    }

    //add d-block from previous img
    document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
}

//previous img
function goPrev(){
    //remove d-block from previous img
    document.querySelectorAll('.img-box')[currentCounter].classList.remove('d-block');
    
    if(currentCounter === 0){
        currentCounter = imgContainer.length -1;
    }else{
        currentCounter--;
    }

    //add d-block from previous img
    document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
}