const darkmodeinput= document.querySelector("#darkmode");

darkmodeinput.addEventListener('click',() => {
    document.documentElement.classList.toggle('dark');
});
