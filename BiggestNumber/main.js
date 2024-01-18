let a;
let b;
let c;


document.getElementById("btn").addEventListener("click", () => {

    a = prompt("Enter the First Number")
    b = prompt("Enter the Second Number")
    c = prompt("Enter the third Number")

    document.getElementById("num1").innerText = " 1st Number is :" + a;
    document.getElementById("num2").innerText = " 1st Number is :" + b;
    document.getElementById("num3").innerText = " 1st Number is :" + c;


    function biggestNumber() {

        if (a > b & a > c) {
            document.getElementById("num4").innerText = "A is Biggest Number=" + a;

        }
        else if ( b>a & b>c){

            document.getElementById("num4").innerText = "B is Biggest Number=" + b;
        }
        else {

            document.getElementById("num4").innerText = "C is Biggest Number= " + c;
        
        }

    }

    console.log(biggestNumber());

});