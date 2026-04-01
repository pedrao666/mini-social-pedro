let likeCount = 0;
let curtido = false; // flag booleana

function curtir() {
  if(curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;
  } else{
    likeCount--;
    curtido = false
    document.getElementById("deslikeCount").innerText = likeCount;
  }
  
}
function descurtir() {
  if(descurtido == false){
    likeCount--;
    descurtido = true;
    document.getElementById("deslikeCount").innerText = likeCount;
  } else{
    likeCount--;
    descurtido = false
    document.getElementById("deslikeCount").innerText = likeCount;
  }
  
}
document.getElementById("likeBtn").addEventListener("click", curtir);

document.getElementById("dselikeBtn").addEventListener("click", descurtir);

let count = document.getElementById("likeCount");