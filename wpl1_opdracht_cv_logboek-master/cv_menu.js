const streepjesIcon = document.getElementById("streepjes-icon");
console.log(streepjesIcon);
streepjesIcon.addEventListener("click",openNav);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const kruisSluiten = document.getElementById("kruis_sluiten");
kruisSluiten.addEventListener("click",closeNav);