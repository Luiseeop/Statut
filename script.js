document.getElementById('submit-button').onclick = function() {
    const name = document.getElementById('name-input').value;
    document.getElementById('output').innerText = `Bonjour, ${name}!`;
};