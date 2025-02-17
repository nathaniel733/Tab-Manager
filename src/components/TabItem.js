import React from "react";

const TabItem = ({ tab }) => {
    const handleClick = () => {
        chrome.tabs.update(tab.id, { active: true });
    };

    return (
        <div
            onClick={handleClick}
            className="p-2 border rounded mb-1 cursor-pointer hover:bg-gray-200"
        >
            {tab.title}
        </div>
    );
};

export default TabItem;
