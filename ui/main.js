console.log('Loaded!');
var x = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft +10;
    x.style.marginLeft = marginLeft+"px";
}
x.onclick = function(){ 
    setInterval(moveRight,50);
};
