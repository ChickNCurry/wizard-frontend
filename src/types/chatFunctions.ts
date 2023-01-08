import SockJS from 'sockjs-client';
import {Client, Frame, over} from 'stompjs';
import {ChatMessage} from './types';

let stompClient: Client;

export function connect(user: string, setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
    let webSocket = new SockJS('http://localhost:8080/ws');
    stompClient = over(webSocket);
    stompClient.connect({}, () => onConnected(user, setChat), onError);
}

function onConnected(user: string, setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
    if (!stompClient) return;
    stompClient.subscribe('/chat', (payload: any) => onMessageReceived(payload, setChat));
    sendJoinMessage(user);
}

function onError(error: string | Frame) {
    console.log(error);
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
            break;
    }
    setChat((prev) => prev.concat(payloadData));
}

function sendJoinMessage(user: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: user,
        message: '',
        date: new Date(),
        status: 'JOIN',
    };
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}

export function sendChatMessage(user: string, message: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: user,
        message: message,
        date: new Date(),
        status: 'MESSAGE',
    };
    console.log(chatMessage);
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}
