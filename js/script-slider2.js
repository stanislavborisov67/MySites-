let slider2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item2');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');

let lengthItems2 = items2.length - 1;
let active2 = 0;
next2.onclick = function(){
    active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
    reloadSlider2();
}
prev2.onclick = function(){
    active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
    reloadSlider2();
}
let refreshInterval2 = setInterval(()=> {next2.click()}, 3000);
function reloadSlider2(){
    slider2.style.left = -items2[active2].offsetLeft + 'px';
    // 
    let last_active_dot2 = document.querySelector('.slider2 .dots2 li.active2');
    last_active_dot2.classList.remove('active2');
    dots2[active2].classList.add('active2');

    clearInterval(refreshInterval2);
    refreshInterval2 = setInterval(()=> {next2.click()}, 3000);

    
}

dots2.forEach((li, key2) => {
    li.addEventListener('click', ()=>{
         active2 = key2;
         reloadSlider2();
    })
})
window.onresize = function(event) {
    reloadSlider2();
};