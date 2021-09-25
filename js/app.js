const ul = document.getElementById("ul");
const input = document.querySelector("input");

// add tag
const addTag = (e) => {
  if (e.code === "Enter") {
    console.log(e.target.value);
  }
  
};

// add event lesener input tag
input.addEventListener("keyup", addTag);
