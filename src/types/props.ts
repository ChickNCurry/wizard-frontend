import {CardSuit, CardType} from './types';

export interface CardProps {
    cardSuit: CardSuit;
    cardType: CardType;
    rotation?: number;
    translation?: number;
}

export interface ChatProps {
    username: string;
}

export interface LoginProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export interface GameProps {
    username: string;
}
