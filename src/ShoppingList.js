import React, { useState } from "react";
import FlipSwitchButton from "./components/FlipSwitchButton";
import ShoppingListDetails from "./components/ShoppingListDetails";
import MemberList from "./components/MemberList";
import ItemList from "./components/ItemList";
import AddItemInput from "./components/AddItemInput";
import AddMemberButton from "./components/AddMemberButton";
import { useShoppingList } from "./hooks/shoppingListManager";
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState("Active");
    const [filter, setFilter] = useState("Unresolved");

    const {
        shoppingList,
        activeUser,
        handleEditListName,
        handleAddItem,
        handleRemoveMember,
        handleAddMember,
        handleTickItem,
        handleEditItem,
        handleDeleteItem,
        handleSwitchUser,
    } = useShoppingList();

    return (
        <div className={`App ${activeUser?.role === "owner" ? "owner" : ""}`}>
            <h2>Current User: {activeUser.name}</h2>
            <div>
                <label>Select User: </label>
                <select value={activeUser.id} onChange={(e) => handleSwitchUser(Number(e.target.value))}>
                    {shoppingList.members.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
            </div>
            <ShoppingListDetails shoppingList={shoppingList} onEditListName={handleEditListName} />
            <FlipSwitchButton
                leftLabel="Active"
                rightLabel="Archived"
                active={activeTab}
                onChange={setActiveTab}
            />

            {activeUser?.role === "owner" && (
                <>
                    <AddMemberButton onAddMember={handleAddMember} />
                </>
            )}

            <MemberList members={shoppingList.members} onRemoveMember={handleRemoveMember} />
            <AddItemInput onAddItem={handleAddItem} />

            <FlipSwitchButton
                leftLabel="Unresolved"
                middleLabel="All"
                rightLabel="Resolved"
                active={filter}
                onChange={setFilter}
            />

            <ItemList
                items={shoppingList.items.filter(item =>
                    filter === "Unresolved" ? !item.completed :
                        filter === "Resolved" ? item.completed :
                            true
                )}
                onTickItem={handleTickItem}
                onEditItem={handleEditItem}
                onDeleteItem={handleDeleteItem}
            />
        </div>
    );
}


export default App;
