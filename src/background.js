chrome.runtime.onInstalled.addListener(() => {
    console.log("Tab Manager Extension Installed!");
});

chrome.tabs.onCreated.addListener((tab) => {
    console.log("New Tab Created:", tab);
});
