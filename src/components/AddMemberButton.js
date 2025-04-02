import React, { useState } from 'react';

function AddMemberButton({ onAddMember }) {
    const [memberName, setMemberName] = useState("");

    const handleAddMember = () => {
        onAddMember(memberName);
        setMemberName("");
    };

    return (
        <div>
            <input
                type="text"
                value={memberName}
                onChange={e => setMemberName(e.target.value)}
                placeholder="Add member by name"
            />
            <button onClick={handleAddMember}>Add Member</button>
        </div>
    );
}

export default AddMemberButton;
