const wynik = document.querySelector("#wynik");
const button = document.querySelectorAll("button");

console.log(wynik);
console.log(button);

const liczby = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", '.'];
const znaki = ['+', '-', '/', 'x', '%', '+/-', 'AC'];

let num1 = "";
let num2 = "";
let znak = "";


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (evt) {

        evt.preventDefault();

        //Czytanie liczb
        if (liczby.includes(button[i].value)) {

            //Czytanie num1
            if (!znak) {
                num1 += button[i].value;
                wynik.innerHTML = num1;
                console.log(`num1 = ${num1}`);
            }

            //Czytanie num2
            else {
                num2 += button[i].value;
                wynik.innerHTML = `${num1} ${znak} ${num2}`;
                console.log(`num2 = ${num2}`);
            }
        }

        //Czytanie znaku
        if (znaki.includes(button[i].value)) {
            znak = button[i].value;
            wynik.innerHTML += ` ${znak}`;
            console.log(`znak to ${znak}`);
        }

        //Przycisk AC do usuwania
        if (button[i].value == "AC") {
            wynik.innerHTML = "0";
            num1 = "";
            num2 = "";
            znak = "";
        }

        //Zmienianie znaku (przycisk +/-)
        if (button[i].value == "+/-") {
            wynik.innerHTML = parseFloat(-1 * num1);
            num1 *= -1;
        }

        //Operacje po znaku równania
        if (button[i].value == "=") {

            //Sprawdzanie czy num2 jest puste
            if (num2 != "") {
                //Dodawanie
                if (znak == "+") {
                    wynik.innerHTML = parseFloat(num1) + parseFloat(num2);
                }

                //Odejmowanie
                else if (znak == "-") {
                    wynik.innerHTML = parseFloat(num1) - parseFloat(num2);
                }

                //Mnożenie
                else if (znak == "x") {
                    wynik.innerHTML = parseFloat(num1) * parseFloat(num2);
                }

                //Dzielenie
                else if (znak == "/") {
                    if (num2 != 0) {
                        wynik.innerHTML = parseFloat(num1) / parseFloat(num2);
                    }
                    else {
                        wynik.innerHTML = "Błąd";
                    }

                }

                //Procent
                else if (znak == "%") {
                    wynik.innerHTML = (parseFloat(num1) * parseFloat(num2)) / 100
                }


            }
            else {
                wynik.innerHTML = "Błąd";
            }

        }

    });
}