import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiFromCurrentRender, queueRerenderWithNewEmoji] = useState("😊");
  const [currentFavouriteEmoji, queueRerenderwithNewFavouriteEmoji] = useState<
    string[]
  >([]);

  const handleStoreCurrentEmoji = () => {
    queueRerenderwithNewFavouriteEmoji([
      ...currentFavouriteEmoji,
      emojiFromCurrentRender,
    ]);
  };

  const handleBigSmile = () => {
    queueRerenderWithNewEmoji("😁");
  };
  const handleScared = () => {
    queueRerenderWithNewEmoji("😨");
  };
  const handleInjured = () => {
    queueRerenderWithNewEmoji("🤕");
  };
  const handleHeart = () => {
    queueRerenderWithNewEmoji("❤️️");
  };
  const handleCool = () => {
    queueRerenderWithNewEmoji("😎");
  };

  return (
    <>
      <h1>FAVOURITE EMOJI PICKER</h1>
      <p>
        Your Top 5 Favourite Emojis:
        {(currentFavouriteEmoji.slice(-5)).map((emoji, i) => (
          <li key={i}>{emoji}</li>
        ))}
      </p>
      <p>Your Current Emoji: {emojiFromCurrentRender}</p>
      <button onClick={handleBigSmile}>😁</button>
      &nbsp;
      <button onClick={handleScared}>😨</button>
      &nbsp;
      <button onClick={handleInjured}>🤕</button>
      &nbsp;
      <button onClick={handleHeart}>❤️️</button>
      &nbsp;
      <button onClick={handleCool}>😎</button>
      <hr />
      <button onClick={handleStoreCurrentEmoji}>Make Favourite</button>
    </>
  );
}
