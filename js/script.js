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


// const newLi = document.createElement("li");
// const newContent = document.createTextNode(card[proprieta]);
// newLi.appendChild(newContent);
// document.getElementById('card-attributes').appendChild(newLi);

let newContent;
let newTag;

/**Adding the name to the HTML */
newContent = document.createTextNode(card.name);
document.getElementById('card-name').appendChild(newContent);

/**Adding the mana cost using a For to read the color of the mana */
for (let proprieta in card.manaCost)
{
    if(card.manaCost[proprieta] != 0)
    {
        newTag = document.createElement('span');        
        newTag.classList = `my_bg-${proprieta}`;
        newContent = document.createTextNode(card.manaCost[proprieta]);
        newTag.appendChild(newContent);
        document.getElementById('card-mana').appendChild(newTag);
    }
}

/**Using the method cmcMana to calculate the total mana cost */
newContent = document.createTextNode(card.cmcMana());
document.getElementById('card-cmc').appendChild(newContent);

/**Reading a card Type, always the family and showing the kinds only if present */
let textTemp;
textTemp = card.type.family;
if (card.type.kind)
{
    textTemp += " - ";
    for (let i = 0; i < card.type.kind.length; i++)
    {
        textTemp += card.type.kind[i] + " ";
    }
}
newContent = document.createTextNode(textTemp);
document.getElementById('card-type').appendChild(newContent);

