function abre1(){
    var valor1 = document.getElementById("recebe").value;
    var strNum = valor1.replace(/[^0-9]/g, '')
    window.open('http://wa.me/+55' + strNum);
}