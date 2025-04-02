import React, { useState } from 'react';

function AddItemInput({ onAddItem }) {
    const [itemName, setItemName] = useState("");

    const handleAddItem = () => {
        onAddItem(itemName);
        setItemName("");
    };

    return (
        <div>
            <input
                type="text"
                value={itemName}
                onChange={e => setItemName(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

export default AddItemInput;
