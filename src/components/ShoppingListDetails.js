import React from "react";

function ShoppingListDetails({ shoppingList, onEditListName }) {
    const handleEditClick = () => {
        const newName = prompt("Enter new name for the shopping list:", shoppingList.name);
        if (newName && newName.trim() !== "") {
            onEditListName(newName);
        }
    };

    return (
        <div className="shopping-list-details">
            <h2>{shoppingList.name}</h2>
            <button onClick={handleEditClick}>Edit</button>
        </div>
    );
}

export default ShoppingListDetails;
