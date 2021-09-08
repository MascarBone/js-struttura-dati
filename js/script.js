// Rappresentazione logica di una carta Magic

let card = {
    /**Card Name */
    name: 'Acidic Slime',
    /**Mana cost of the card, by mana type */
    manaCost: {
        common: 3,
        white: 0,
        blue: 0,
        black: 0,
        red: 0,
        green: 2
    },
    /**Type of the card*/
    type: {
        /**Family of the card, es. creature, enchantment, instant */
        family: 'Creature',
        /**Specification of the 'type' property, may contains multiple values(all strings)  */
        kind: ['Ooze']
    },
    /**Expansion and informations related to it */
    expansion: {
        name: 'Adventures in the Forgotten Realms Commander',
        rarity: 'Uncommon',
        numberCard: 151,
        numberCards: 0
    },
    /**List of all the abilities */
    abilities : [
        {
            cost: {} ,
            tapped: false,
            description: 'Deathtouch'
        },
        {
            cost: {} ,
            tapped: false,
            description: 'When Acidic Slime enters the battlefield, destroy target artifact, enchantment, or land.'
        }
    ],
    /**Card Text, background story */
    flavorText : 'Non teme la spada e non lascia traccia alcuna.',
    /**Artist */
    artist: 'Karl Kopinski',
    power: '2',
    thoghness: '2',

    cmcMana: function() {
        let sum = 0;
        for (let property in this.manaCost)
        {
            sum += this.manaCost[property];
        }
        return sum;
    },

    manaType: function() {

    }
}

let newLi;
let newContent;


newLi = document.createElement("li");
newContent = document.createTextNode(card.name);
newLi.appendChild(newContent);
// newLi.classList = 'name-card';
document.getElementById('card-informations').appendChild(newLi);



newLi = document.createElement("li");
for (let proprieta in card.manaCost)
{
    if (card.manaCost[proprieta] != 0)
    {
        newContent = document.createTextNode(card.manaCost[proprieta]);
        newLi.appendChild(newContent);
    }
}
document.getElementById('card-informations').appendChild(newLi);


// const newLi = document.createElement("li");
// const newContent = document.createTextNode(card[proprieta]);
// newLi.appendChild(newContent);
// document.getElementById('card-attributes').appendChild(newLi);

