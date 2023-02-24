const incEl = document.getElementById("inc");
const decEl = document.getElementById("dec");
const countEl = document.querySelector(".count");
const ansEl = document.querySelector(".ans");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let count = 0;
countEl.innerText = 0;
ansEl.innerText = `${0} ETH`;
btn2.innerText = `Support ${count * 0.01} ETH`

incEl.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
  ansEl.innerText = `${count * 0.01} ETH`
  btn2.innerText = `Support ${count * 0.01} ETH`
})
decEl.addEventListener("click", () => {
  if(count >=1){
    count--;
    countEl.innerText = count;
    ansEl.innerText = `${count * 0.01} ETH`
    btn2.innerText = `Support ${count * 0.01} ETH`
  }
})