import {CardSuit, CardType} from './types';

export interface CardProps {
    cardSuit: CardSuit;
    cardType: CardType;
    rotation?: number;
    translation?: number;
}

export interface ChatProps {
    playerID: string;
}

export interface LoginProps {
    playerID: string;
    setPlayerID: React.Dispatch<React.SetStateAction<string>>;
}

export interface GameProps {
    playerID: string;
}
