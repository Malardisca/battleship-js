class Ship
{
    let currentPlayer = playerOne;
    function playGame() {
        if(currentPlayer === 'playerOne')
        {
            turnDisplay.innerHTML = 'Player Ones turn'
            playerTwo.forEach(square => square.addEventListerner('click', function(e) {
                revealSquare(square)
            }))
        }
        if(currentPlayer === 'playerTwo')
        {
            turnDisplay.innerHTML = 'Player Twos turn'
            playerOne.forEach(square => square.addEventListener('click',function(e) {
                revealSquare(square)
            } ))
        }
    }
    let destroyerCount = 0
    let submarineCount = 0
    let cruiserCount = 0
    let battleshipCount = 0
    let carrierCount = 0

    function revealSquare(square) {
        if(square.classList.contains('destroyer')) destroyerCount++
        if(square.classList.contains('submarine')) submarineCount++
        if(square.classList.contains('cruiser')) submarineCount++
        if(square.classList.contains('battleship')) battleshipCount++
        if(square.classList.contains('carrier')) carrierCount++

        if(squares)
    }
};