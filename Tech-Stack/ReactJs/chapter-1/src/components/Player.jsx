import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const playerNameVar = isEditing ? (
    <input type='text' required />
  ) : (
    <span className='player-name'>{name}</span>
  );

  return (
    <li>
      <span className='player'>
        {playerNameVar}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};
export default Player;
