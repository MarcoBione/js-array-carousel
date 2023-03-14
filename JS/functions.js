//next img
function goNext(){
    //remove d-block from previous img
    document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
    
    if(currentCounter === imgContainer.length -1){
        currentCounter = 0;
    }else{
        currentCounter++;
    }
}