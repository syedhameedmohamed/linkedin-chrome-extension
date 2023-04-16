var searchResults = document.querySelectorAll('.reusable-search__result-container');

for (let i = 0; i < searchResults.length; i++) {
    var url = searchResults[i].querySelectorAll('.app-aware-link ')[1].href;
    window.open(url, '_blank')
}