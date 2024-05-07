chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: () => {
        console.log("Started");
        document.addEventListener("mouseup", async function () {
          let selection = window.getSelection().toString();
          console.log("Selection:", selection);
          navigator.clipboard.writeText(selection);
        });
      },
    });
  }
});
