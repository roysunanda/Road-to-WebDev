import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handlePlayerNameChange = (event) => {
    // console.log(event);
    setPlayerName(event.target.value);
  };

  const handleEditClick = () => {
    // edit == isEditing. Both are same.
    setIsEditing((edit) => !edit);
  };

  const playerNameVar = isEditing ? (
    <input
      type='text'
      required
      value={playerName}
      onChange={handlePlayerNameChange}
    />
  ) : (
    <span className='player-name'>{playerName}</span>
  );

  const btnCaption = isEditing ? `Save` : `Edit`;

  return (
    <li className={isActive ? "active" : undefined}>
      <span className='player'>
        {playerNameVar}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};
export default Player;
