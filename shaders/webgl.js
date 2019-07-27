var canvas = document.getElementById("c");
var gl = canvas.getContext("webgl2")

if(!gl){

}

function readFile(name){
    alert("hi")
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./shaders/"+name+"", true)
    rawFile.onstatereadychange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var file = rawFile.responseText;
                alert(file);
            }
        }
    }
    rawFile.send(null);
}

readFile("vertexShader.vert");