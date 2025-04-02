import { useState } from "react";

const initialShoppingList = {
    name: "Grocery List",
    items: [
        { id: 1, name: "Milk", completed: false },
        { id: 2, name: "Bread", completed: true }
    ],
    members: [
        { id: 1, name: "John", role: "owner" },
        { id: 2, name: "Jane", role: "member" }
    ]
};

export function useShoppingList() {
    const [shoppingList, setShoppingList] = useState(initialShoppingList);
    const [activeUser, setActiveUser] = useState(shoppingList.members[0]);

    const handleEditListName = (newName) => {
        if (activeUser?.role === "owner") {
            setShoppingList((prev) => ({
                ...prev,
                name: newName
            }));
        } else {
            alert("Only the owner can edit the list name.");
        }
    };

    const handleAddItem = (name) => {
        const newItem = { id: Date.now(), name, completed: false };
        setShoppingList((prev) => ({ ...prev, items: [...prev.items, newItem] }));
    };

    const handleRemoveMember = (id) => {
        if (activeUser?.role === "owner" || activeUser?.id === id) {
            setShoppingList((prev) => ({
                ...prev,
                members: prev.members.filter((member) => member.id !== id)
            }));
        } else {
            alert("Only the owner can remove members or you can only remove yourself.");
        }
    };

    const handleAddMember = (name) => {
        if (activeUser?.role === "owner") {
            const newMember = { id: Date.now(), name, role: "member" };
            setShoppingList((prev) => ({ ...prev, members: [...prev.members, newMember] }));
        } else {
            alert("Only the owner can add new members.");
        }
    };

    const handleSwitchUser = (id) => {
        const newActiveUser = shoppingList.members.find((member) => member.id === id);
        if (newActiveUser) {
            setActiveUser(newActiveUser);
        }
    };

    const handleTickItem = (id) => {
        setShoppingList((prev) => ({
            ...prev,
            items: prev.items.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        }));
    };

    const handleEditItem = (id, newName) => {
        setShoppingList((prev) => ({
            ...prev,
            items: prev.items.map((item) =>
                item.id === id ? { ...item, name: newName } : item
            )
        }));
    };

    const handleDeleteItem = (id) => {
        setShoppingList((prev) => ({
            ...prev,
            items: prev.items.filter((item) => item.id !== id)
        }));
    };

    return {
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
    };
}
