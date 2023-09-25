let menu = document.getElementById("menu");
let navlist = document.querySelector(".navlist");
menu.onclick = ()=>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
window.onscroll = ()=>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}

let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currenWordIndex = 0;
let maxWordIndex = words.length -1;
words[currenWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currenWord = words[currenWordIndex];
    let nextWord = currenWordIndex === maxWordIndex ? words[0] : words[currenWordIndex + 1];

    Array.from(currenWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currenWordIndex = currenWordIndex ===maxWordIndex ? 0 :currenWordIndex + 1;
};
changeText();
setInterval(changeText,3000)