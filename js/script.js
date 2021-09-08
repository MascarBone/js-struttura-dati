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
        numberCards: 'xxx'
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
let textTemp;

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
textTemp = card.type.family;
if (card.type.kind.length)
{
    textTemp += " - ";
    for (let i = 0; i < card.type.kind.length; i++)
    {
        textTemp += card.type.kind[i] + " ";
    }
}
newContent = document.createTextNode(textTemp);
document.getElementById('card-type').appendChild(newContent);

/**Ouput of the cardText, showing abilities */
if (card.abilities.length)
{
    document.getElementById('card-text-row').className = 'row';
    for (let i = 0; i < card.abilities.length; i++)
    {   
        newTag = document.createElement('li');
        // For In to control every property inside abilities
        // for (let proprieta in card.abilities[i])
        // {
        //     textTemp += card.abilities[i][prorieta];
        // }        
        newContent = document.createTextNode(card.abilities[i].description);
        newTag.appendChild(newContent);
        document.getElementById('card-text').appendChild(newTag);
    }    
    document.getElementById('card-text').appendChild(newTag);
}

/**Flavor text Output */
newContent = document.createTextNode(card.flavorText);
document.getElementById('card-flavor-text').appendChild(newContent);

/**Power and Toughness */
textTemp = `${card.power} / ${card.thoghness}`;
newContent = document.createTextNode(textTemp);
document.getElementById('card-strength').appendChild(newContent);

/**Expansion Output */
newContent = document.createTextNode(card.expansion.name);
document.getElementById('card-expansion').appendChild(newContent);

/**Rarity Output*/
newContent = document.createTextNode(card.expansion.rarity);
document.getElementById('card-rarity').appendChild(newContent);

/**Number of the card Output*/
newContent = document.createTextNode(card.expansion.numberCard);
document.getElementById('card-number').appendChild(newContent);
if(card.expansion.numberCards)
{
    newContent = document.createTextNode("/" + card.expansion.numberCards);
    document.getElementById('card-number').appendChild(newContent);
}

/**Artist name Output */
newContent = document.createTextNode(card.artist);
document.getElementById('card-artist').appendChild(newContent);

/**IMG selection */
document.getElementById('img-card').setAttribute('src','https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=533382&type=card');