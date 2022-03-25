let dictionaryReqeust = new XMLHttpRequest();
let response;
const wordInput = document.querySelector('#word-field');
const searchButton = document.querySelector('#btn-search');

searchButton.addEventListener('click', () => {
    if (wordInput.value == '') {
        alert('Вы не ввели слово для поиска, пожалуйста введите слово и повторите поиск.');
    } else {
        const searchWord = wordInput.value;
        
        dictionaryReqeust.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
        
        dictionaryReqeust.send();

        dictionaryReqeust.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                response = JSON.parse(this.responseText);
                ereasePage();
                addHeader();
                addAudio();
                addSource();
                console.log(response);
            } else if (this.readyState == 4 && this.status == 404){
                response = JSON.parse(this.responseText);
                console.log(response.message);
                console.log(response.resolution);
            }
        };

        wordInput.value = '';
    }
});

function ereasePage() {
    document.querySelector('.placeholder').innerHTML = '';
}

function addHeader() {
    document.querySelector('.placeholder').innerHTML += `
    <div class="word">
        <h2>Here is a search result for the word "${response[0].word}"</h2>
    </div>
    `;
}

function addAudio() {
    document.querySelector('.placeholder').innerHTML += `
    <h3>Phonetics</h3>
    <audio controls>
        <source src=${response[0].phonetics[0].audio} type="audio/mpeg">
        Here is how this word pronounced.
    </audio>
    `;
}

function addSource() {
    document.querySelector('.placeholder').innerHTML += `
    <h3>Additional Sources</h3>
    <div>You can also find an additional information abou the word <a href="${response[0].sourceUrls[0]}">here</a></div>
    `;
}

