document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodletLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodletLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    function createPlatforms() {
        for (let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform()
        }
    }
    
    function start() {
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    // Attach to a button
    start()
})