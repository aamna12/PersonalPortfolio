document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
    if( document.querySelector('.sidebar').classList.contains('sidebar-go')){
        document.querySelector('.menu').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }else{
        document.querySelector('.menu').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },300);
}   
});