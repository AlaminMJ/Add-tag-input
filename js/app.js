const ul = document.getElementById("ul"),
  input = document.querySelector("input"),
  countTag = document.querySelector(".details span");

// add tag
let tags = [];
const maxTag = 10;
function countTagNumber() {
  countTag.innerText = maxTag - tags.length;
}
countTagNumber();
//createing tag
const createTag = () => {
  ul.querySelectorAll("li").forEach((li) => {
    li.remove(); //remove all tags
  });
  tags.reverse().forEach((tag) => {
    const liTag = `<li>${tag}<i class="bx bx-x" onClick="remove(this,'${tag}')"></i></li>`; // Create li tag
    ul.insertAdjacentHTML("afterbegin", liTag); //insert into html
  });
  countTagNumber();
};
function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  countTagNumber();
}
// add tag function
const addTag = (e) => {
  if (e.code === "Enter") {
    //if click enter button then run the condition
    const tag = e.target.value.replace(/\s+/g, " "); // remove extra space
    if (tag.length > 1 && !tags.includes(tag)) {
      // chack tag lenth gater than 1 letter and not exits in the list of tags
      if (tags.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag(); //creating tag
        });
      }
    }
    e.target.value = "";
  }
};

// add event lesener input tag
input.addEventListener("keyup", addTag);

// delete all tag
const btn = document.querySelector(".details button");
btn.addEventListener("click", () => {
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
  countTagNumber();
});
