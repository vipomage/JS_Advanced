let result  = (function () {
        let Suits = {
            CLUBS: "\u2663",   // ♣
            DIAMONDS: "\u2666",   // ♦
            HEARTS: "\u2665",   // ♥
            SPADES: "\u2660"    // ♠
        };
        let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        class Card {
            constructor(face, suit) {
                this.suit = suit;
                this.face = face;
            }

            get suit() {
                return this._suit;
            }

            set suit(value) {
                if (!Object.keys(Suits).map(shade => Suits[shade]).includes(value)) {
                    throw new Error(`Invalid card suite: ${value}`)
                }
                this._suit = value;
            }

            get face() {
                return this._face;
            }

            set face(value) {
                if (!Faces.includes(value)) {
                    throw new Error(`Invalid card face: ${value}`)
                }
                this._face = value;
            }

            toString(){return this.face+this.suit}

        }

        return {Suits, Card}
    }
    ()
)

let Card = result.Card;
let Suits = result.Suits;


card = new Card("1",Suits.CLUBS);
console.log( card+"");