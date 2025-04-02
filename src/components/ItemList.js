import React from 'react';

function ItemList({ items, onTickItem, onEditItem, onDeleteItem }) {
    return (
        <div>
            <h3>Items</h3>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
            <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>
              {item.name}
            </span>
                        <button onClick={() => onTickItem(item.id)}>Resolve</button>
                        <button onClick={() => onEditItem(item.id, prompt("New name:"))}>Edit</button>
                        <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
