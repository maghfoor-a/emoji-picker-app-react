import { useState } from 'react';

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState("😊");
    const [currentFavouriteEmoji, queueRerenderwithNewFavouriteEmoji] =
    useState("");

    const handleStoreCurrentEmoji = () => {
        queueRerenderwithNewFavouriteEmoji(emojiFromCurrentRender);
    };

    const handleBigSmile = () => {
        queueRerenderWithNewEmoji("😁")
    };

    return (
        <>
        <h1>FAVOURITE EMOJI PICKER</h1>
        <p>Your Favourite Emoji: {currentFavouriteEmoji}</p>
        <p>Your Current Emoji: {emojiFromCurrentRender}</p>
        <button onClick={handleBigSmile}>😁</button>

        <hr />
        <button onClick={handleStoreCurrentEmoji}>Make Favourite</button>
        </>
    )
}