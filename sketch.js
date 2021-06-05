var football;
var database, position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    football = createSprite(250,250,10,10);
    football.shapeColor = "red";
    var footballposition = database.ref('ball/position')
    footballposition.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y
})
}
function  readPosition(data){
position = data.val();
football.x = position.x;
football.y = position.y;
}
function showError(){
    console.log("Error");
}