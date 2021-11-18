const copyUrlButton = document.querySelector('#copy-url-button');

copyUrlButton.addEventListener('click', () => {
    const shortenedUrl = document.querySelector('#shortened-url');
    navigator.clipboard.writeText(shortenedUrl);

    copyUrlButton.style.backgroundColor = '#4aeb2a';
    copyUrlButton.textContent = 'Copied!';
});