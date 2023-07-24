function clicked(element) {
    let inputs = document.querySelectorAll(".contact-input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === element) {
            inputs[i].style.border = "2px solid #2EB4A7"; // Apply the border to the clicked input
        } else {
            inputs[i].style.border = "3px solid whitesmoke" // remain the default border the border 
        }
    }
}
// sec4ImageLinks.forEach(link => {
//     link.addEventListener('mouseover', () => {
//         spanWord.style.display = 'inline';
//     });

//     link.addEventListener('mouseout', () => {
//         spanWord.style.display = 'none';
//     });
// });


let sec4ImageLinks = document.querySelectorAll('.sec4-image a');
let spanWord = document.querySelector('.rate-software .span-word');

function img_1_5() {
    let ihtml = `
<i class="clr fa-solid fa-star"></i>
<i class="clr fa-solid fa-star"></i>
<i class="clr fa-solid fa-star"></i>
<i class="clr fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>`;
    spanWord.innerHTML = ihtml;
    spanWord.style.display = 'block'
}

function img_2_3() {
    let ihtml = `
    <i class="clr fa-solid fa-star"></i>
    <i class="clr fa-solid fa-star"></i>
    <i class="clr fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>`;
    spanWord.innerHTML = ihtml;
    spanWord.style.display = 'block'
}

function img_4() {
    let ihtml = `
<i class="clr fa-solid fa-star"></i>
<i class="clr fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>`;
    spanWord.innerHTML = ihtml;
    spanWord.style.display = 'block'
}

// let ihtml = ``;
// spanWord.innerHTML = ihtml;


sec4ImageLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.className === '01' || link.className === '05') {
            img_1_5();
        }
        else if (link.className === '02' || link.className === '03') {
            img_2_3();
        }
        else if (link.className === '04') {
            img_4();
        }
    })
});

