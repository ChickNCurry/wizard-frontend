import '../../styles/chat.css';

import React, {useEffect, useState} from 'react';
import {ChatProps} from '../../types/props';
import {ChatMessage} from '../../types/types';
import {connectToChat, sendChatMessage} from '../../types/webSocketFunctions';

export default function Chat({playerID}: ChatProps) {
    const [chat, setChat] = useState<ChatMessage[]>([]);
    const [chatMessage, setChatMessage] = useState<string>('');

    useEffect(() => {
        connectToChat(playerID, setChat);
    }, []);

    useEffect(() => {
        console.log(chat);
    }, [chat]);

    const handleMessage = (event: any) => {
        setChatMessage(event.target.value);
    };

    const sendMessage = () => {
        if (chatMessage === '') return;
        sendChatMessage(playerID, chatMessage);
        setChatMessage('');
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat">
            <div className="chat-output">{chat.map((entry) => <p> {entry.message} </p>).reverse()}</div>
            <div className="chat-input">
                <input type="text" value={chatMessage} onChange={handleMessage} onKeyDown={handleKeyDown}></input>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
