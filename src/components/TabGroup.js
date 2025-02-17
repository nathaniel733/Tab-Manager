import React from "react";
import TabItem from "./TabItem";

const categorizeTabs = (tabs) => {
    const categories = {
        Work: ["docs", "drive", "slack"],
        Social: ["facebook", "twitter", "instagram"],
        News: ["bbc", "cnn", "nytimes"]
    };

    const groupedTabs = {
        Work: [],
        Social: [],
        News: [],
        Others: []
    };

    tabs.forEach((tab) => {
        let found = false;
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some((kw) => tab.url.includes(kw))) {
                groupedTabs[category].push(tab);
                found = true;
                break;
            }
        }
        if (!found) groupedTabs.Others.push(tab);
    });

    return groupedTabs;
};

const TabGroup = ({ tabs }) => {
    const groupedTabs = categorizeTabs(tabs);

    return (
        <div>
            {Object.entries(groupedTabs).map(([category, tabs]) => (
                <div key={category} className="mb-4">
                    <h2 className="text-lg font-semibold">{category}</h2>
                    {tabs.map((tab) => (
                        <TabItem key={tab.id} tab={tab} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TabGroup;
