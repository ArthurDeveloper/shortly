const urlInput = document.querySelector('#url-input');
const shortenUrlButton = document.querySelector('#shorten-url-button');
const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');
const shortenedUrlContainer = document.querySelector('#shortened-url-container');
const shortenedUrl = document.querySelector('#shortened-url');


function validateUrl(url) {
    const urlRegex = /(https?:\/\/(?:www\.|(?!www))[A-z0-9][A-z0-9-]+[A-z0-9]\.[^\s]{2,}|www\.[A-z0-9][A-z0-9-]+[A-z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[A-z0-9]+\.[^\s]{2,}|www\.[A-z0-9]+\.[^\s]{2,})/;
    return url.match(urlRegex) ? true : false;
}

function shortenUrl(url) {
    fetch(`https://app-shortly.herokuapp.com/url/shorten?url=${url}`)
        .then((res) => res.json())
        .then((json) => { 
            const shortUrl = `https://app-shortly.herokuapp.com/${json.data.id}`; 
            shortenedUrl.href = shortUrl;
            shortenedUrl.textContent = shortUrl;
            shortenedUrlContainer.classList.remove('hidden');
        });
}

urlInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        const url = urlInput.value;
        if (validateUrl(url)) {
            shortenUrl(url);
        } else {
            successMessage.textContent = '';
            errorMessage.textContent = 'Please enter a valid url';
        }
    }
});

shortenUrlButton.addEventListener('click', () => {
    const url = urlInput.value;
    if (validateUrl(url)) {
        shortenUrl(url);
    } else {
        successMessage.textContent = '';
        errorMessage.textContent = 'Please enter a valid url';
    }
});