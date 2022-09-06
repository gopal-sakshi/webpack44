function myFunction() {
    document.write("Hello World!");
}
function addNumbers() {
    var input1 = document.getElementById('num1').value;
    var input2 = document.getElementById('num2').value;
    // var result = input1 + input2;
    var result = Number(input1) + Number(input2);
    console.log(result);
    document.getElementById('result').innerHTML = result;
}
