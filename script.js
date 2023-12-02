let heading = document.querySelector(".heading")

let n_h = heading.innerText  = "Hello Java from apna college"

let boxes = document.querySelectorAll(".box");

// box[0].innerText = "new value"
// box[1].innerText = "new value"
// box[2].innerText = "new value"
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].innerText = "new value";
//     console.log(i)
// }

for (const box of boxes) {
    box.innerText = "world"
}
let i = 1;
boxes.forEach(box => {
    box.innerText = `hghg ${i}`
    i++;
});


let new_b = document.getElementById("box-id")

console.log(new_b.firstElementChild.nodeName);

let new_C = document.getElementsByClassName("box-class")

console.log(new_C.firstElementChild.nodeName);

// const p01 = document.getElementById("para-01");
//   console.log(p01.lastElementChild.nodeName);