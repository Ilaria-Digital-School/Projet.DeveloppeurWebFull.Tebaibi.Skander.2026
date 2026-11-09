const btnScroll = document.querySelector(".scroll-to-top")
console.log(btnScroll);

if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        
    }

    )
    
}