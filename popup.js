const toggle = document.getElementById('toggle');

toggle.addEventListener('change', async() => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (toggle.checked) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    } else {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                document.querySelectorAll('.reusable-search__result-container').forEach((container) => {
                    container.querySelectorAll('.app-aware-link')[1].removeAttribute('target');
                });
            }
        });
    }
});