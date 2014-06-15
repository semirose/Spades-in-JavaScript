var card = 0;
var Player;
var roll = function() {
  card = (Math.floor(Math.random() * 52));
};
var card1 = "10 of Spades";
var card2 = "2 of Spades";
var card3 = "3 of Spades";
var card4 = "4 of Spades";
var card5 = "5 of Spades";
var card6 = "6 of Spades";
var card7 = "7 of Spades";
var card8 = "8 of Spades";
var card9 = "9 of Spades";
var card10 = "Jack of Spades";
var card11 = "Queen of Spades";
var card12 = "King of Spades";
var card13 = "Ace of Spades";
var card14 = "10 of Hearts";
var card15 = "Little Joker";
var card16 = "3 of Hearts";
var card17 = "4 of Hearts";
var card18 = "5 of Hearts";
var card19 = "6 of Hearts";
var card20 = "7 of Hearts";
var card21 = "8 of Hearts";
var card22 = "9 of Hearts";
var card23 = "Jack of Hearts";
var card24 = "Queen of Hearts";
var card25 = "King of Hearts";
var card26 = "Ace of Hearts";
var card27 = "10 of Clubs";
var card28 = "Big Joker";
var card29 = "3 of Clubs";
var card30 = "4 of Clubs";
var card31 = "5 of Clubs";
var card32 = "6 of Clubs";
var card33 = "7 of Clubs";
var card34 = "8 of Clubs";
var card35 = "9 of Clubs";
var card36 = "Jack of Clubs";
var card37 = "Queen of Clubs";
var card38 = "King of Clubs";
var card39 = "Ace of Clubs";
var card40 = "10 of Spades";
var card41 = "2 of Spades";
var card42 = "3 of Spades";
var card43 = "4 of Spades";
var card44 = "5 of Spades";
var card45 = "6 of Spades";
var card46 = "7 of Spades";
var card47 = "8 of Spades";
var card48 = "9 of Spades";
var card49 = "Jack of Spades";
var card50 = "Queen of Spades";
var card51 = "King of Spades";
var card52 = "Ace of Spades";
var dealtCards = [];
function Player() {
    this.playerCards = [];
    while(this.playerCards.length < 13) {
        roll();
        chooseCard(card);
}
        var chooseCard = function(card) {
        if(card === 1) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card1 && i == dealtCards.length) {
        this.playerCards.push(card1);
        }
        dealtCards.push(card1);
        }
        }
         if(card === 2) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card2 && i == dealtCards.length) {
        this.playerCards.push(card2);
        }
            dealtCards.push(card2);
        }
         }
         if(card === 3) {
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card3 && i == dealtCards.length) {
        this.playerCards.push(card3);
        }
            dealtCards.push(card3);
        }
         }
         if(card === 4) {
        
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card4 && i == dealtCards.length) {
        this.playerCards.push(card4);
        }
            dealtCards.push(card4);
        }
         }
         if(card === 5) {
            if(card === 3) {
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card5 && i == dealtCards.length) {
        this.playerCards.push(card5);
        }
            dealtCards.push(card5);
        }
            }
         }
         if(card === 6) {
          
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card6 && i == dealtCards.length) {
        this.playerCards.push(card6);
        }
            dealtCards.push(card6);
        }
         }
         if(card === 7) {
           
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card7 && i == dealtCards.length) {
            this.playerCards.push(card7);
        }
            dealtCards.push(card7);
        }
         }
         if(card === 8) {
             
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card8 && i == dealtCards.length) {
        this.playerCards.push(card8);
        }
            dealtCards.push(card8);
        }
         }
         if(card === 9) {
            
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card9 && i == dealtCards.length) 
        this.playerCards.push(card9);
        }
            dealtCards.push(card9);
        }
         if(card === 10) {
            
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card10 && i == dealtCards.length) {
            this.playerCards.push(card10);
        }
            dealtCards.push(card10);
        }
         }
         if(card === 11) {
         
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card11 && i == dealtCards.length) {
            this.playerCards.push(card11);
        }
            dealtCards.push(card11);
        }
         }
         if(card === 12) {
         
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card12 && i == dealtCards.length) {
            this.playerCards.push(card12);
        }
            dealtCards.push(card12);
        }
         }
         if(card === 13) {
         
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card13 && i == dealtCards.length) {
            this.playerCards.push(card13);
        }
            dealtCards.push(card13);
        }
         }
         if(card === 14) {
        
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card14 && i == dealtCards.length) {
            this.playerCards.push(card14);
        }
            dealtCards.push(card14);
        }
         }
         if(card === 15) {
         
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card15 && i == dealtCards.length) {
            this.playerCards.push(card15);
        }
            dealtCards.push(card15);
        }
         }
         if(card === 16) {
         
        for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card16 && i == dealtCards.length) {
            this.playerCards.push(card16);
        }
            dealtCards.push(card16);
        }
         }
         if(card === 17) { 
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card17 && i == dealtCards.length) {
            this.playerCards.push(card17);
        }
            dealtCards.push(card17);
        }
         }
         if(card === 18) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card18 && i == dealtCards.length) {
            this.playerCards.push(card18);
        }
            dealtCards.push(card18);
        }
         }
         if(card === 19) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card19 && i == dealtCards.length) {
            this.playerCards.push(card19);
        }
            dealtCards.push(card19);
        }
         }
         if(card === 20) {
         for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card20 && i == dealtCards.length) {
            this.playerCards.push(card20);
        }
            dealtCards.push(card20);
        }
         }
         if(card === 21) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card21 && i == dealtCards.length) {
            this.playerCards.push(card21);
        }
            dealtCards.push(card21);
        }
         }
         if(card === 22) {
            for (var i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card22 && i == dealtCards.length) {
            this.playerCards.push(card22);
        }
            dealtCards.push(card22);
        }
         }
         if(card === 23) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card23 && i == dealtCards.length) {
            this.playerCards.push(card23);
        }
            dealtCards.push(card23);
        }
         }
         if(card === 24) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card24 && i == dealtCards.length) {
            this.playerCards.push(card24);
        }
            dealtCards.push(card24);
        }
         }
         if(card === 25) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card25 && i == dealtCards.length) {
            this.playerCards.push(card25);
        }
            dealtCards.push(card25);
        }
         }
         if(card === 26) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card26 && i == dealtCards.length) {
            this.playerCards.push(card26);
        }
            dealtCards.push(card26);
        }
         }
         if(card === 27) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card27 && i == dealtCards.length) {
          this.playerCards.push(card27);
        }
            dealtCards.push(card27);
        }
         }
         if(card === 28) {
        for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card28 && i == dealtCards.length) {
            this.playerCards.push(card28);
        }
            dealtCards.push(card28);
        }
         }
         if(card === 29) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card29 && i == dealtCards.length) {
            this.playerCards.push(card29);
        }
            dealtCards.push(card29);
        }
         }
         if(card === 30) {
         for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card30 && i == dealtCards.length) {
            this.playerCards.push(card30);
        }
            dealtCards.push(card30);
        }
         }
         if(card === 31) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card31 && i == dealtCards.length) {
            this.playerCards.push(card31);
        }
            dealtCards.push(card31);
        }
         }
         if(card === 32) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card32 && i == dealtCards.length) {
            this.playerCards.push(card32);
        }
            dealtCards.push(card32);
        }
         }
         if(card === 33) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card33 && i == dealtCards.length) {
            this.playerCards.push(card33);
        }
            dealtCards.push(card33);
        }
         }
         if(card === 34) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card34 && i == dealtCards.length) {
            this.playerCards.push(card34);
        }
            dealtCards.push(card34);
        }
         }
         if(card === 35) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card35 && i == dealtCards.length) {
            this.playerCards.push(card35);
        }
            dealtCards.push(card35);
        }
         }
         if(card === 36) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card36 && i == dealtCards.length) {
            this.playerCards.push(card36);
        }
            dealtCards.push(card36);
        }
         }
         if(card === 37) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card37 && i == dealtCards.length) {
            this.playerCards.push(card37);
        }
            dealtCards.push(card37);
        }
         }
         if(card === 38) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card38 && i == dealtCards.length) {
            this.playerCards.push(card38);
        }
            dealtCards.push(card38);
        }
         }
         if(card === 39) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card39 && dealtCards.length) {
            this.playerCards.push(card39);
        }
            dealtCards.push(card39);
        }
         }
         if(card === 40) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card40 && i == dealtCards.length) {
            this.playerCards.push(card40);
        }
            dealtCards.push(card40);
        }
         }
         if(card === 41) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card41 && i == dealtCards.length) {
            this.playerCards.push(card41);
        }
            dealtCards.push(card41);
        }
         }
         if(card === 42) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card42 && i == dealtCards.length) {
            this.playerCards.push(card42);
        }
            dealtCards.push(card42);
        }
         }
         if(card === 43) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card43 && i == dealtCards.length) {
            this.playerCards.push(card43);
        }
            dealtCards.push(card43);
        }
         }
         if(card === 44) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card44 && i == dealtCards.length) {
            this.playerCards.push(card44);
        }
            dealtCards.push(card44);
        }
         }
         if(card === 45) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card45 && i == dealtCards.length) {
            this.playerCards.push(card45);
        }
            dealtCards.push(card45);
        }
         }
         if(card === 46) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card46 && i == dealtCards.length) {
            this.playerCards.push(card46);
        }
            dealtCards.push(card46);
        }
         }
         if(card === 47) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card47 && i == dealtCards.length) {
            this.playerCards.push(card47);
        }
            dealtCards.push(card47);
        }
         }
         if(card === 48) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card48) {
            this.playerCards.push(card48);
        }
            dealtCards.push(card48);
        }
         }
         if(card === 49) {
            for (i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card49 && i == dealtCards.length) {
            this.playerCards.push(card49);
        }
            dealtCards.push(card49);
        }
         }
         if(card === 50) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card50 && i == dealtCards.length) {
            this.playerCards.push(card50);
        }
            }
            dealtCards.push(card50);
        }
         if(card === 51) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card51 && i == dealtCards.length) {
            this.playerCards.push(card51);
        }
            dealtCards.push(card51);
        }
         if(card === 52) {
            for(i = 0; i < dealtCards.length; i++) {
        if (dealtCards[i] !== card52 && i == dealtCards.length) {
            this.playerCards.push(card52);
        }
            dealtCards.push(card52);
        }
    }
    console.log(this.playerCards);
    }
    Player1 = new Player();
    alert("Player One's Cards: " + Player1.playerCards);
    Player2 = new Player();
    Player3 = new Player();
    Player4 = new Player();      
