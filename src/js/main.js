import TicTacToe from "./ticTacToe.js"

const buttons = document.querySelectorAll(".btn-game")
const results = {
    scoreX: document.querySelector("#scoreX"),
    scoreO: document.querySelector("#scoreO"),
    scoreXO: document.querySelector("#scoreXO"),
    bannerWins: document.querySelector("#banner-wins"),
}

new TicTacToe(buttons, results)

const animationElements = () => {
    const elements = document.querySelectorAll("[data-animate]")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add(`animate-${entry.target.dataset.animate}`, "played")
        })
    }, { rootMargin: "-80px" })
    elements.forEach(el => observer.observe(el))
}

animationElements()