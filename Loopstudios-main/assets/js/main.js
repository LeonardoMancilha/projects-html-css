document.addEventListener("DOMContentLoaded", e => {
    const $nav = document.querySelector(".nav");
    const $hamburger_button = document.querySelector(".nav__hamburguer");

    $hamburger_button.addEventListener("click", e => {
        $nav.classList.toggle("open");
        document.body.classList.toggle("no-scroll");
        $hamburger_button.classList.toggle("opened");
        $hamburger_button.setAttribute(
            "aria-expanded",
            $hamburger_button.classList.contains("opened")
        );
    });
});

/*



*/