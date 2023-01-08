export enum CardSuit {
    GREEN = 'green',
    BLUE = 'blue',
    RED = 'red',
    YELLOW = 'yellow',
}

export enum CardType {
    JESTER = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    ELEVEN = 11,
    TWELVE = 12,
    THIRTEEN = 13,
    WIZARD = 14,
}

export interface CardObject {
    suit: CardSuit;
    type: CardType;
}

export interface PlayerData {
    name: string;
    score: number;
    bid: number;
    actual: number;
}

export interface GameAction {
    playerID: string;
    actionType: ActionType;
    card: CardObject;
    suit: CardSuit;
    tricks: number;
}

export type ActionType = 'SET_READY' | 'PREDICT_TRICKS' | 'PLAY_CARD' | 'CHOOSE_TRUMP_SUIT';

export interface ChatMessage {
    sender: string;
    message: string;
    date: Date;
    status: Status;
}

export type Status = 'JOIN' | 'MESSAGE' | 'LEAVE';
