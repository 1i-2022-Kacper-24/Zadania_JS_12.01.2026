const email = document.getElementById('email'); 
const validate = document.getElementById('validateBtn'); 
const clearBtn = document.getElementById('clearBtn'); 
const trimmedSpan = document.getElementById('trimmed'); 
const hasAtSpan = document.getElementById('hasAt'); 
const startsLetterSpan = document.getElementById('startsLetter'); 
const endsDomainSpan = document.getElementById('endsDomain'); 
const localPartSpan = document.getElementById('localPart'); 
const domainPartSpan = document.getElementById('domainPart'); 
const domainReplacedSpan = document.getElementById('domainReplaced'); 
const resultsBox = document.getElementById('results');


const trimmed = function(){
    let localText = document.getElementById('email').value;
    localText = localText.trim();

    console.log(localText);
    trimmedSpan.innerHTML = localText;
};

const hasAt = function(){
    const localText = document.getElementById('email').value;
    let has = localText.includes('@');
    if (has == true){
        has = "TAK";
    }
    else {
        has = "NIE";
    };

    console.log(has);
    hasAtSpan.innerHTML = has;
};

const firstLetter = function() {
    const alphabet = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];
    const localText = document.getElementById('email').value.trim().toLowerCase();
    const firstChar = localText.charAt(0);
    let first = alphabet.includes(firstChar);
    if (first == true){
        first = "TAK";
    }
    else {
        first = "NIE";
    };

    console.log(first);
    startsLetterSpan.innerHTML = first;
};


const ending = function(){
    const localText = document.getElementById('email').value.trim().toLowerCase().split('.');
    const ending = localText[(localText.length - 1)];
    if (ending == 'com'){
        const ends = "TAK";

        console.log(ends);
        endsDomainSpan.innerHTML = ends;
    }
    else if (ending == 'pl'){
        const ends = 'TAK';

        console.log(ends);
        endsDomainSpan.innerHTML = ends;
    }
    else {
        const ends = 'NIE';

        console.log(ends);
        endsDomainSpan.innerHTML = ends;
    };
};

const parts = function(){
    const localText = document.getElementById('email').value.trim().toLowerCase().split('@');
    const firstHalf = localText[0];
    const secondHalf = localText[1];

    console.log(firstHalf);
    localPartSpan.innerHTML = firstHalf;
    console.log(secondHalf);
    domainPartSpan.innerHTML = secondHalf;
};

const dotsToDash = function(){
    const localText = document.getElementById('email').value.trim().toLowerCase().split('@');
    let secondHalf = localText[1];
    secondHalf = secondHalf.replaceAll('.', '-');

    console.log(secondHalf);
    domainReplacedSpan.innerHTML = secondHalf;
};


const validateEmail = function(){
    resultsBox.style = 'display: block';
    trimmed();
    hasAt();
    firstLetter();
    ending();
    parts();
    dotsToDash();
};

validate.addEventListener('click', validateEmail);