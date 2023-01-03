const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const container = document.getElementById('card-body');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    filterCards(input.value);
});

input.addEventListener('input', () => {
    filterCards(input.value);
});

function filterCards(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    const cards = container.querySelectorAll('.card');
    for (const card of cards) {
        const title = card.querySelector('.card-title');
        if (title.textContent.toLowerCase().includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
