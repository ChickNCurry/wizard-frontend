import {CardSuit, CardType} from './types';

export interface CardProps {
    cardSuit: CardSuit;
    cardType: CardType;
    rotation?: number;
    translation?: number;
}

export interface ChatProps {
    user: string;
}
