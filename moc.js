let h3 = document.querySelector("h3");
let chang = document.querySelector("body");
let btn = document.querySelector("#btn");
let div=document.querySelector("div");
div.style.backgroundColor="white";
  div.style.border="none";
btn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = [red, green, blue];
    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    chang.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    h3.innerText = `rgb(${color})`;
    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.style.border="none";
   
   
});
