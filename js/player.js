/* need to define GetHit, getCLickEvent(),the way to show Players' ships remain */

class player(){
    val player1.numberOfShips();
    val player2.numberOfShips();
    Boolean player1.(getHit) = false;
    Boolean player2.(getHit) = false;
    do{
        if(Player2.GetHit() = true){
            document.showPlayer1.getClickEvent();
        }
        else if(Player2.GetHit() = false){
            document.showPlayer2.getClickEvent();
        }
        else if(Player1.GetHit() = false){
            document.showPlayer2.getClickEvent();
        }
        else if(Player1.GetHit() = true){
            document.showPlayer1.getClickEvent();
        }

    } while (player1.numberOfShips() > 0 && player2.numberOfShips() >0);

    if(showPlayer2.numberOfShips() >0 && showPlayer1.numberOfShips() == 0){
        alert('Player2 Win!');
        return showPlayer2(win);
    }
    else if(showPlayer2.numberOfShips() == 0 && showPlayer1.numberOfShips() > 0){
        alert('Player1 Win!');    
        return showPlayer1(win);
    }
    else{
        alert('Draw!');
        return draw;
    }
};
