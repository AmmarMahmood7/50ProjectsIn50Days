const panels = Array.from(document.querySelectorAll(".panel"));

panels.map((panel) => {

    panel.addEventListener('click', function () {
        removeActiveClasses();
        panel.classList.toggle('active')

    })


})
function removeActiveClasses() {

    panels.map((panel) => {

        panel.classList.remove('active')

    })
}

