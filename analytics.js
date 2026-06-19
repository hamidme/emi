(function () {
    const countEl = document.getElementById('visitor-count');
    if (!countEl) return;

    const endpoint = 'https://api.countapi.xyz/hit/hamidme.github.io/emi';

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data && typeof data.value !== 'undefined') {
                countEl.textContent = Number(data.value).toLocaleString();
            } else {
                countEl.textContent = '0';
            }
        })
        .catch(function () {
            countEl.textContent = '0';
        });
})();
