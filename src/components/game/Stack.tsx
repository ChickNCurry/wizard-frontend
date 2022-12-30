import React from 'react';

export default function Pile() {
    const drawCard = () => {};
    return (
        <div className="stack-wrapper" onClick={drawCard}>
            <div className="stack"></div>
        </div>
    );
}
