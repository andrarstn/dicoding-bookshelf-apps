const displayLocalStorageKey = "DARK_MODE"

const darkButton = document.querySelector("#darkButton")

if (localStorage.getItem(displayLocalStorageKey) === null) {
    localStorage.setItem(displayLocalStorageKey, 'light');
}else{
    if (localStorage.getItem(displayLocalStorageKey) == 'dark') {
        toDark()
    }
}

darkButton.addEventListener("click", function(){
    toDark()
    switchDisplay()
})

function toDark() {
    darkButton.classList.toggle("light-button")
    if(darkButton.innerHTML != "Light Mode"){
        darkButton.innerHTML = "Light Mode"
    }else{
        darkButton.innerHTML = "Dark Mode"
    }
    document.querySelector("body").classList.toggle("body-dark")
    document.querySelector("header").classList.toggle("head_bar-dark")

    document.querySelector("#inputSection").classList.toggle("border-dark")
    document.querySelector("#searchSection").classList.toggle("border-dark")
    document.querySelector("#bookShelfCompleted").classList.toggle("border-dark")
    document.querySelector("#bookShelfUncompleted").classList.toggle("border-dark")

    document.querySelector("#h2InputSection").classList.toggle("color-dark")
    document.querySelector("#searchSectionH2").classList.toggle("color-dark")
    document.querySelector("#completedH2").classList.toggle("color-dark")
    document.querySelector("#completeBookshelfList").classList.toggle("color-dark")
    document.querySelector("#uncompletedH2").classList.toggle("color-dark")
    
    let bookItem = document.getElementsByClassName("book_item")
    for (let index = 0; index < bookItem.length; index++) {
        bookItem[index].classList.toggle("border-dark")
    }

    document.querySelector("#inputBookTitle").labels[0].classList.toggle("color-dark")
    document.querySelector("#inputBookAuthor").labels[0].classList.toggle("color-dark")
    document.querySelector("#inputBookYear").labels[0].classList.toggle("color-dark")
    document.querySelector("#inputBookIsComplete").labels[0].classList.toggle("color-dark")
}

function switchDisplay() {
    if (localStorage.getItem(displayLocalStorageKey) == 'light') {
        localStorage.setItem(displayLocalStorageKey, 'dark');
    }else{
        localStorage.setItem(displayLocalStorageKey, 'light');
    }
}