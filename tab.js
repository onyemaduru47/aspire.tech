const tabcontents = document.querySelectorAll(".tabcontent");
const tabLinks = document.querySelectorAll(".tabs a");

function openTab(event, tabName) {
    // REMOVE ALL TABCONTENTS

    tabcontents.forEach((tabcontent) => (tabcontent.style.display = "none"));

    tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));

    // ADD ACTIVE CLASS ON TABLINK AND OPEN IT

    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}




const tabcontents1 = document.querySelectorAll(".tabcontent1");
const tabLinks1 = document.querySelectorAll(".tabs1 a");

function open1(event, tabName) {
    // REMOVE ALL TABCONTENTS

    tabcontents1.forEach((tabcontent1) => (tabcontent1.style.display = "none"));

    tabLinks1.forEach((tabLink1) => tabLink1.classList.remove("active"));

    // ADD ACTIVE CLASS ON TABLINK AND OPEN IT

    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}


//JAVASCRIPT FOR PRICING OVERLAY
