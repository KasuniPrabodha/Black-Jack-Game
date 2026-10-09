function main(){
    //random card do-while loop

    let confirm = document.getElementById('main_result').innerHTML;
    if (confirm == "You Lost 🙁"){
        alert("Game Over. Try Again !");
    }else{

    let x;
    do{
    x = Math.floor(Math.random()*100/7.6); //Math.floor-->වටයනවා
    }while(x==0);

    let currentTT = parseInt(document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML = total;

    if(total<21){
        document.getElementById('main_result').innerHTML = "Generate another card?";
    }else if(total==21){
        document.getElementById('main_result').innerHTML = "You Won 🎉";
        alert("Congradulations !!!");
        document.getElementById('btn-res').style.display = 'block';
    }else if(total>21){
        document.getElementById('main_result').innerHTML = "You Lost 🙁";
        alert("Sorry Try Again !!!");
        document.getElementById('btn-res').style.display = 'block';
    }
    
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 200;
    document.body.appendChild(img);
    
}
}
function restart(){
        location.reload();
    } 