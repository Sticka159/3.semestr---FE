import React from 'react';

function MemberList({ members, onRemoveMember }) {
    return (
        <div>
            <h3>Members</h3>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        {member.name} ({member.role})
                        {member.role === 'owner' ? null : (
                            <button onClick={() => onRemoveMember(member.id)}>Remove</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MemberList;
