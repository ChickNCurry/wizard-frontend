import React from 'react';

import {CardProps} from '../../types/props';
import {CardSuit, CardType} from '../../types/types';
import archer from '../../assets/icons8-archer-64.png';
import centaur from '../../assets/icons8-centaur-64.png';
import cyclops from '../../assets/icons8-cyclops-64.png';
import echidna from '../../assets/icons8-echidna-64.png';
import genieLamp from '../../assets/icons8-genie-lamp-64.png';
import giant from '../../assets/icons8-giant-64.png';
import goblin from '../../assets/icons8-goblin-64.png';
import golem from '../../assets/icons8-golem-64.png';
import hunter from '../../assets/icons8-hunter-64.png';
import medusa from '../../assets/icons8-medusa-64.png';
import minotaur from '../../assets/icons8-minotaur-64.png';
import vampire from '../../assets/icons8-vampire-64.png';
import warrior from '../../assets/icons8-warrior-64.png';
import witch from '../../assets/icons8-witch-64.png';
import wizard from '../../assets/icons8-wizard-64.png';
import blank from '../../assets/blank-64.png';

export default function Card({cardSuit, cardType, rotation, translation}: CardProps) {
    console.log(process.env.SERVER_URL);
    const playCard = (cardSuit: CardSuit, cardType: CardType) => console.log(`played ${cardSuit} ${cardType}`);
    const mapCardSuitToColor = (cardSuit: CardSuit) => {
        if (cardSuit === CardSuit.GREEN) return 'lightgreen';
        if (cardSuit === CardSuit.BLUE) return 'lightblue';
        if (cardSuit === CardSuit.RED) return 'lightcoral';
        if (cardSuit === CardSuit.YELLOW) return 'lightyellow';
        return 'lightgrey';
    };
    const mapCardTypeToImg = (cardType: CardType) => {
        if (cardType === CardType.JESTER) return archer;
        if (cardType === CardType.ONE) return centaur;
        if (cardType === CardType.TWO) return cyclops;
        if (cardType === CardType.THREE) return echidna;
        if (cardType === CardType.FOUR) return genieLamp;
        if (cardType === CardType.FIVE) return giant;
        if (cardType === CardType.SIX) return goblin;
        if (cardType === CardType.SEVEN) return golem;
        if (cardType === CardType.EIGHT) return hunter;
        if (cardType === CardType.NINE) return medusa;
        if (cardType === CardType.TEN) return minotaur;
        if (cardType === CardType.ELEVEN) return vampire;
        if (cardType === CardType.TWELVE) return warrior;
        if (cardType === CardType.THIRTEEN) return witch;
        if (cardType === CardType.WIZARD) return wizard;
        return blank;
    };
    return (
        <div
            className="card"
            style={{
                background: mapCardSuitToColor(cardSuit),
                transform: `rotate(${rotation ? rotation : 0}deg) translateX(${translation ? translation : 0}px)`,
            }}
            onClick={() => playCard(cardSuit, cardType)}
        >
            {cardType}
            <img className="image" src={mapCardTypeToImg(cardType)} />
            {cardType}
        </div>
    );
}
