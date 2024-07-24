document.addEventListener("DOMContentLoaded",()=>{

    menu_icon = document.getElementById("menu_icon")
    menu = document.getElementById("menu")

    menu_icon.addEventListener("click", ()=>{        
        menu_icon.classList.toggle("fa-bars")
        menu_icon.classList.toggle("fa-xmark")

        menu.classList.toggle("hidden")
    })

})