
const nav = document.querySelector("nav");
console.log(nav)

const changeBackground = () => {
    if (document.body.scrollTop > 500) {
        console.log("hiiii")
        nav.style.backgroundColor = "white";
    } else {
        nav.style.backgroundColor = "transparent";
    }
};

changeBackground();
