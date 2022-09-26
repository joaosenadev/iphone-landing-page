function imgChange(change){
    document.querySelector('#phone').src = change;
}

function changeCircle(color){
    const circle = document.querySelector('.circle');

    circle.style.background = color;
}
function voceComprou(){
    var qtd = document.querySelector(".input-qtd-iphone").value;


    alert("Você comprou: " + qtd + " iPhone(s)");
}