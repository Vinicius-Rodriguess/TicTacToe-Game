class TicTacToe {
    currentPlayer = "x"
    pointsX = 0
    pointsO = 0
    pointsXO = 0
    movesPlayerX = []
    movesPlayerO = []
    winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    constructor(buttons, results) {
        this.buttons = buttons
        this.results = results
        this.addEventListenersToButtons()
    }

    addEventListenersToButtons() {
        this.buttons.forEach((button, index) => {
            button.setAttribute("data-index", index)
            button.addEventListener("click", (e) => {
                if (e.target.innerHTML !== "") return
                this.makeMove(e)
                this.checkForWinner()
            })
        })
    }

    makeMove(e) {
        const buttonIndex = parseInt(e.target.getAttribute("data-index"))

        if (this.currentPlayer === "x") {
            e.target.innerHTML = "x"
            e.target.classList.add("x")
            this.currentPlayer = "o"
            this.movesPlayerX.push(buttonIndex)

        } else {
            e.target.innerHTML = "o"
            e.target.classList.add("o")
            this.currentPlayer = "x"
            this.movesPlayerO.push(buttonIndex)
        }
    }

    checkForWinner() {
        const totalMoves = this.movesPlayerX.length + this.movesPlayerO.length

        if (totalMoves >= 9) {
            this.endGame("xo")
            return
        }

        this.winningCombinations.forEach(combination => {
            if (combination.every(index => this.movesPlayerX.includes(index)))
                this.endGame("x")

            if (combination.every(index => this.movesPlayerO.includes(index)))
                this.endGame("o")
        })
    }

    endGame(result) {
        if (result === "xo") this.pointsXO++
        if (result === "x") this.pointsX++
        if (result === "o") this.pointsO++
        
        this.updateScoreboard(result)
    }

    updateScoreboard(result) {
        this.results.scoreX.innerHTML = this.pointsX
        this.results.scoreO.innerHTML = this.pointsO
        this.results.scoreXO.innerHTML = this.pointsXO

        this.results.bannerWins.innerHTML = result
        this.results.bannerWins.classList.add(result)
        this.results.bannerWins.classList.remove("hidden")

        setTimeout(() => {
            this.resetBoard()
        }, 3000)
    }

    resetBoard() {
        this.buttons.forEach(button => button.innerHTML = "")
        this.movesPlayerX = []
        this.movesPlayerO = []
        this.currentPlayer = "x"
        this.results.innerHTML = ""
        this.buttons.forEach(btn => btn.classList.remove("x", "o", "xo"))
        this.results.bannerWins.classList.remove("x", "o", "xo")
        this.results.bannerWins.classList.add("hidden")
    }
}

export default TicTacToe