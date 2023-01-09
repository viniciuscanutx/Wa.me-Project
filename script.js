function abre1(){
    var valor1 = document.getElementById("recebe").value;
    var valor2 =  document.getElementById("selectddd1").value;
    var strNum = valor1.replace(/[^0-9]/g, '')
    window.open('http://wa.me/' + valor2 + strNum);
    document.getElementById('recebe').value='';
}