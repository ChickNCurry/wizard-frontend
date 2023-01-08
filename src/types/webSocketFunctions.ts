import SockJS from 'sockjs-client';
import {Client, Frame, over} from 'stompjs';
import {ChatMessage, GameAction} from './types';

let stompClient: Client;

export function connect(playerID: string) {
    if (stompClient) stompClient.disconnect(() => console.log('disconnected'));
    let webSocket = new SockJS('http://localhost:8080/ws');
    stompClient = over(webSocket);
    stompClient.connect({}, () => onConnected(playerID), onError);
}

function onError(error: string | Frame) {
    console.log(error);
}

function onConnected(playerID: string) {
    if (!stompClient) return;
    stompClient.subscribe('/game', onGameActionReceived);
    stompClient.subscribe(`/player/${playerID}`, onGameActionReceived);
}

function onGameActionReceived(payload: any) {
    let payloadData: GameAction = JSON.parse(payload.body);
    switch (payloadData.actionType) {
        case 'SET_READY':
            // TODO
            break;
        case 'PREDICT_TRICKS':
            // TODO
            break;
        case 'PLAY_CARD':
            // TODO
            break;
        case 'CHOOSE_TRUMP_SUIT':
        // TODO
    }
}

export function connectToChat(playerID: string, setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
    if (!stompClient) return;
    stompClient.subscribe('/chat', (payload: any) => onMessageReceived(payload, setChat));
    sendJoinMessage(playerID);
}

function onMessageReceived(payload: any, setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
    let payloadData: ChatMessage = JSON.parse(payload.body);
    switch (payloadData.status) {
        case 'JOIN':
            payloadData = {...payloadData, message: `${payloadData.sender} joined`};
            break;
        case 'MESSAGE':
            payloadData = {...payloadData, message: `${payloadData.sender}: ${payloadData.message}`};
            break;
        case 'LEAVE':
            payloadData = {...payloadData, message: `${payloadData.sender} left`};
    }
    setChat((prev) => prev.concat(payloadData));
}

function sendJoinMessage(playerID: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: playerID,
        message: '',
        date: new Date(),
        status: 'JOIN',
    };
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}

export function sendChatMessage(playerID: string, message: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: playerID,
        message: message,
        date: new Date(),
        status: 'MESSAGE',
    };
    console.log(chatMessage);
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}
