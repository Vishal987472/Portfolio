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

// Pop up
let sections = document.getElementsByTagName("section")
// let hr_tag = document.getElementsByTagName("hr")
let pop_up = document.getElementById('pop-up')
let pop_up_i=pop_up.getElementsByTagName('i')[0]

setTimeout(() => {
    pop_up_add()
}, 2000)
setTimeout(() => {
    pop_up_remove()
}, 8000)

function pop_up_add() {
    pop_up.removeAttribute('hidden')
    for (let index = 0; index < sections.length; index++) {
        // sections[index].setAttribute('hidden', 'true')
        sections[index].style.opacity = '.1'
    }
}
function pop_up_remove() {
    pop_up.setAttribute('hidden', 'true')
    for (let index = 0; index < sections.length; index++) {
        // sections[index].removeAttribute('hidden')
        sections[index].style.opacity = '1'
    }
}
pop_up_i.addEventListener('click',pop_up_remove)



// sections.addEventListener('sc', () => {
    
// });

// for (let i = 0; i < sections.length; i++) {
//     sections[i].style.color='red'
// }


// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 10;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
let scroll_btn=document.getElementById('scroll-btn')

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        scroll_btn.style.display = 'block';
    } else {
        scroll_btn.style.display = 'none';
    }
});

scroll_btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
