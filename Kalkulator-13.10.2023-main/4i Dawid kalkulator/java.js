const wynik = document.querySelector("#wynik");
const button = document.querySelectorAll("button");

console.log(wynik);
console.log(button);

const liczby = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const znaki = ["+", "-", "/", "x", "%", "+/-"];

let num1 = "";
let num2 = "";
let znak = "";

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt){
    evt.preventDefault();

    if (liczby.includes(button[i].value)) {
      if (znak) {
        num2 += button[i].value;
        wynik.innerHTML = `${num1} ${znak} ${num2}`;
        console.log(`num2 = ${num2}`);
      } else {
        num1 += button[i].value;
        wynik.innerHTML = num1;
        console.log(`num1 = ${num1}`);
      }
    }

    if (znaki.includes(button[i].value)) {
      znak = button[i].value;
      wynik.innerHTML += ` ${znak}`;
      console.log(`znak to ${znak}`);
    }

    if (button[i].value == "=") {

        if(num2!=="")
        {
            if (znak == "+") {
                wynik.innerHTML = parseInt(num1) + parseInt(num2);
              } else if (znak == "-") {
                wynik.innerHTML = parseInt(num1) - parseInt(num2);
              } else if (znak == "x") {
                wynik.innerHTML = parseInt(num1) * parseInt(num2);
              } else if (znak == "/") {
                if(num2!=="0")
                {
                    wynik.innerHTML = parseInt(num1) / parseInt(num2);
                }
                else 
                {
                    wynik.innerHTML = "Błąd";
              }
            }
            else if (znak == "%") {
                wynik.innerHTML = (parseInt(num1)*parseInt(num2))/100;
            }
    }
    else
    {
         wynik.innerHTML = "Błąd";
    }
    if (button[i].value == "AC") {
        wynik.innerHTML = "0";
        num1 = "";
        num2 = "";
        znak = "";
      }
    
    
}});
}