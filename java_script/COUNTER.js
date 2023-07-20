let count=0;

document.addEventListener('DOMContentLoaded',()=>{

  document.getElementById("countbtn").onclick=()=> {
    document.getElementById("output").innerHTML=count;
    //alert(count);
    count=count+1;
  }


})
