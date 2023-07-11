// to get the input box and then value inside
let inputbox = document.getElementById("inputBox").children[1];

// to get the two countries
fromFirst = document.getElementById("from1");
toSecond = document.getElementById("from2");

// to get there flag
firstFlag = document.getElementsByClassName("firstImg");
secondFlag = document.getElementsByClassName("secondImg");

// to show the output
answer = document.getElementById("outPut").children;

// adding a event listener to fromFirst

// fromFirst.addEventListener("change", calculate);
// toSecond.addEventListener("change", calculate);

// inputbox.addEventListener("input", calculate);

// this is the code which is putting the value into the para tag
clicked = document.getElementsByTagName("button");
clicked[0].addEventListener("click", calculate);

// fatching the currency rate and updating a DOM

function calculate() {
  // this will show the value of selected option
  const firstOne = fromFirst.value;
  const SecondOne = toSecond.value;

  let p = fetch(
    `https://v6.exchangerate-api.com/v6/130d6751fc480789a5fc7852/latest/${firstOne}`
  )
    .then((response) => response.json())
    .then((data) => {
      // this one to fetch data from inside the network
      const rate = data.conversion_rates[SecondOne];
      let B = rate * inputbox.value;

      A =
        answer[0].innerHTML = `${inputbox.value}${firstOne} = ${B}${SecondOne}`;
      answer.innerHTML = A;
      console.log(inputbox.value);
    });
}
