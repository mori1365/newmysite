let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
}
window.onscroll = ()=>{
    menu.classList.remove("bx-x-circle");
    navbar.classList.remove("open");
}

// slider......menu...menu.
const myslide = document.querySelectorAll(".myslide"),
    dot = document.querySelectorAll(".dot");

    let counter = 1;
    slidefun(counter);

    let timer = setInterval(autoSlide, 8000);
     
    function autoSlide(){
        counter += 1;
        slidefun(counter);
    }
    function plusslide(n){
        counter += n;
        slidefun(counter);
        resetTimer();
    }
    function currentSlide(n){
        counter = n;
        slidefun(counter);
        resetTimer();
    }
    function resetTimer(){
        clearInterval(timer);
        timer = setInterval(autoSlide, 8000);
    }
    function slidefun(n) {
        let i;
        for(i = 0;i<myslide.length;i++){
            myslide[i].style.display = "none";
        }
        for(i = 0;i<dot.length;i++){
            dot[i].className = dot[i].className.replace('active','');
        }
        if(n >myslide.length){
            counter = 1;
        }
        if(n < 1){
            counter = myslide.length;
        }
        myslide[counter - 1].style.display = "block";
        dot[counter - 1].className += " active";
    }


    
    
 // نمایش کلمات به ترتیب
 var texts = ["لیگ اسپانیا","رقابتهای باشگاهی","رقابتهای ملی","آمار بازیکنان","تصاویر"];
    var currentIndex = 0;

    function changeText() {
      document.getElementById("displayText").innerHTML = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(changeText, 2000); // تاخیر ۲ ثانیه‌ای بین تغییرات
    }

    document.addEventListener("DOMContentLoaded", function() {
      changeText();
    });





function plus(){
    document.querySelector(".showleague").style.display = "block";
    document.querySelector(".league").style.display = "none";
    document.querySelector(".league1").style.display = "block";
}
function onplus(){
    document.querySelector(".showleague").style.display = "none";
    document.querySelector(".league").style.display = "block";
    document.querySelector(".league1").style.display = "none";
}


// عکس
        function showImage(imageSrc, text) {
            var overlay = document.querySelector('.overlay');
            var overlayImage = document.querySelector('#overlayImage');
            var overlayText = document.querySelector('#overlayText');

            overlayImage.src = imageSrc;
            overlayText.textContent = text;
            overlay.style.display = 'flex';
        }

        function hideImage() {
            var overlay = document.querySelector('.overlay');
            overlay.style.display = 'none';
        }