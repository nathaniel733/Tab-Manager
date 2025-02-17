import React, { useState, useEffect } from "react";
import TabGroup from "./components/TabGroup";

const App = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        chrome.tabs.query({}, (result) => {
            setTabs(result);
        });
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-3">Tab Manager</h1>
            <TabGroup tabs={tabs} />
        </div>
    );
};

export default App;
