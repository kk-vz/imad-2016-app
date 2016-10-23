console.log('Loaded!');
var x = document.getElementById("madi");
var y = document.getElementById("yes");
var z = document.getElementById("count");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft +10;
    x.style.marginLeft = marginLeft+"px";
    console.log(x.style.marginLeft);
}
x.onclick = function(){ 
    setInterval(moveRight,200);
};
y.onclick = function(){
    var req = new XMLHttpRequest();
   
    req.onreadystatechange = function(){
        if(req.readystate == XMLHttpRequest.DONE){
            if(req.status == 200){
                var counter = req.responseText;
                console.log(counter.toString());
                z.innerHTML = counter.toString();
            }
        }
    }
    
    req.open('GET',"http://kk-vz.imad.hasura-app.io/counter",true);
    req.send(null);
};