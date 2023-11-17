import { useState } from "react"

export default function player({ initialname, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialname);

    const toggleEditing = () => {
        setIsEditing(editing => !editing);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    const playerContent = isEditing ?
        (<input type="text" defaultValue={playerName} onChange={handleChange} required />) :
        (<span className="player-name">{playerName}</span>);

    return (
        <li>
            <span className="player">
                {playerContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}