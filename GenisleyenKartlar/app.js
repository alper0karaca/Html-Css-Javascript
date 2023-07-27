
// queryselectorall ile tüm panelleri bir dizi gibi alıyoruz 
const panels = document.querySelectorAll(".panel");


// foreach ile hepsine üzerine tıklanıldığında bir  önceki panelden active'i kaldırıyoruz
// ve yeni tıklanılana geçiyor
panels.forEach(panel => {

    panel.addEventListener('click', () => {

        removeActive();
        panel.classList.add("active");
    })

})

function removeActive(){

    panels.forEach(panel => {
        panel.classList.remove("active")
    })

}

