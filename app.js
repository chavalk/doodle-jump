document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodletLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodletLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    
    function start() {
        if (!isGameOver) {
            createDoodler()
        }
    }
    // Attach to a button
    start()
})