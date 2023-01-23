import '../../styles/chat.css';

import React, {useEffect, useState} from 'react';
import {ChatProps} from '../../types/props';
import {ChatMessage} from '../../types/types';
import {connectToChat, sendChatMessage} from '../../types/webSocketFunctions';
import {Button, Card} from '@blueprintjs/core';
import {Elevation} from '@blueprintjs/core/lib/esm/common';
import {TextArea} from '@blueprintjs/core/lib/esm/components';

export default function Chat({username: playerID}: ChatProps) {
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
        <div className="chat-wrapper">
            <Card className="chat">
                <div className="bp4-callout chat-output">{chat.map((entry) => <p> {entry.message} </p>).reverse()}</div>
                <div className="chat-input">
                    <TextArea
                        className="chat-text-area"
                        value={chatMessage}
                        onChange={handleMessage}
                        onKeyDown={handleKeyDown}
                    ></TextArea>
                    <Button className="chat-button" onClick={sendMessage}>
                        Send
                    </Button>
                </div>
            </Card>
        </div>
    );
}
