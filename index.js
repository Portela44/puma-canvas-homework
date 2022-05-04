const canvas = document.getElementById("shapes");
const ctx = canvas.getContext("2d");
console.log(ctx);

ctx.clearRect(0, 0, 1000, 600);

const ash = {
    x:700,
    y:300,
    width:250,
    height:250,
}

const lugia = {
    x:10,
    y:10,
    width:180,
    height:180,
}

const lapras = {
    x:650,
    y:400,
    width:250,
    height:120,
}

const misty = {
    x:500,
    y:300,
    width:112,
    height:250,
}

const laprasImg = new Image();
laprasImg.src = "lapras.png";


const ashImg = new Image();
ashImg.src = "ash.png";


const lugiaImg = new Image();
lugiaImg.src = "lugia.png";


const mistyImg = new Image();
mistyImg.src = "misty.png";


const digletts = [
    {
        x:20,
        y:435,
        width:100,
        height:100,
    },
    {
        x:200,
        y:485,
        width:100,
        height:100,
    },
    {
        x:250,
        y:495,
        width:100,
        height:100,
    },
    {
        x:350,
        y:455,
        width:100,
        height:100,
    },
    {
        x:650,
        y:480,
        width:100,
        height:100,
    }
]

const diglettImg = new Image();
diglettImg.src = "diglett.png";


function swimmingLapras() {
    ctx.clearRect(0, 0, 1000, 600);
    
    lapras.x = lapras.x-4;
    if (lapras.x < -260) {
        lapras.x = 950;
    }
    ctx.drawImage(laprasImg, lapras.x, lapras.y, lapras.width, lapras.height);
    digletts.forEach(pkmn => {
        ctx.drawImage(diglettImg, pkmn.x, pkmn.y, pkmn.width, pkmn.height);
    })
       
    ctx.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);
    ctx.drawImage(mistyImg, misty.x, misty.y, misty.width, misty.height);
    ctx.drawImage(lugiaImg, lugia.x, lugia.y, lugia.width, lugia.height);
}

setTimeout(function () {
    let interval = setInterval(swimmingLapras,100)
}, 0);

function flyingLugia() {
    ctx.clearRect(0, 0, 1000, 600);
    
    lugia.x = lugia.x+10;
    if (lugia.x > 1000) {
        lugia.x = -1000;
    }
    ctx.drawImage(lugiaImg, lugia.x, lugia.y, lugia.width, lugia.height);

    digletts.forEach(pkmn => {
        ctx.drawImage(diglettImg, pkmn.x, pkmn.y, pkmn.width, pkmn.height);
    })
    ctx.drawImage(laprasImg, lapras.x, lapras.y, lapras.width, lapras.height);
    ctx.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);
    ctx.drawImage(mistyImg, misty.x, misty.y, misty.width, misty.height);
    ctx.drawImage(lugiaImg, lugia.x, lugia.y, lugia.width, lugia.height);
}

setTimeout(function () {
    let interval = setInterval(flyingLugia,20)
}, 0);

function randomDiglett() {
    ctx.clearRect(0, 0, 1000, 600);
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    
}








