import SockJS from 'sockjs-client';
import {Client, Frame, over} from 'stompjs';
import {ChatMessage, GameAction} from './types';
import React from 'react';

let stompClient: Client;

export function connect(username: string) {
    if (stompClient) stompClient.disconnect(() => console.log('disconnected'));
    let webSocket = new SockJS('http://localhost:8080/ws');
    stompClient = over(webSocket);
    stompClient.connect({}, () => onConnected(username), onError);
}

function onError(error: string | Frame) {
    console.log(error);
}

function onConnected(username: string) {
    if (!stompClient) return;
    stompClient.subscribe('/game', onGameActionReceived);
    stompClient.subscribe(`/player/${username}`, onGameActionReceived);
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

export function connectToChat(username: string, setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
    if (!stompClient) return;
    stompClient.subscribe('/chat', (payload: any) => onMessageReceived(payload, setChat));
    sendJoinMessage(username);
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

function sendJoinMessage(username: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: username,
        message: '',
        date: new Date(),
        status: 'JOIN',
    };
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}

export function sendChatMessage(username: string, message: string) {
    if (!stompClient) return;
    let chatMessage: ChatMessage = {
        sender: username,
        message: message,
        date: new Date(),
        status: 'MESSAGE',
    };
    console.log(chatMessage);
    stompClient.send('/app/chat-message', {}, JSON.stringify(chatMessage));
}
