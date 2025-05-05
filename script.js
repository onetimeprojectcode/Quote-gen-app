const quotes = [
    {
        text: "There is no failure except in no longer trying. There is no defeat except from within.",
        author: "Elbert Hubbard"
    },
    {
        text: ".وكنت اغسل كآبتي الكبيرة في فنجان قهوة صغير",
        author: "غسان كنفاني"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text:"I wanna talk, I wanna call ou and talk.",
        author:"Tyler, The creator"
    },
    {
        text:"Song Title: Highschool sweethearts.",
        author:"Melanie Martinez"
    },
    {
        text: "Half of what i say is meaningless; but i say it so the other half may reach you.",
        author: "Khalil Gibran"
    },
    {
        text: "At the trial of God, we will ask: why did you allow all this?. And te answer will be an echo: why did you allow all this?.",
        author: "Ilya Kaminsky"
    },
    {
        text: "Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he does not discern any truth either in himself or anywhere around him, and thus falls into disrespect towards himself and others." ,
        author:"Fyodor Dostoyevsky"
    },
    {
        text: "And then it is very lonely to have once been really at home with someone, and then not have them anymore.", 
        author:"Martha Gellhorn"
    },
    {
        text: "One day i woke up and we no longer spoke the same language. i haven't heard from you since.", 
        author:"Hisham Siddiqi"
    },
    {
        text: "I hope one day we can forgive each other for not being what we wanted each other to be.", 
        author:"Aditi Kriti G"
    },
    {
        text: "I wrote endless letters to you in my mind.", 
        author:"Franz Kafka"
    },
    {
        text: "So, if you are too tired to speak, sit next to me because i too am fluent in silence", 
        author:"Ron Arnold"
    },
    {
        text: "I wonder if we ever think of each other at the same time.", 
        author:"unknown"
    },
    {
        text: "Blink and you are twenty eight, and everyone else is now a mile down the road, and you're still trying to find it, and the irony is hardly lost on you that in wanting to live, to learn, to find yourself, you've gotten lost.", 
        author:"V.E Schwab"
    },
    {
        text: "The prince of Achilles spoke of treasure to be won, and where there was greed there was hope.", 
        author:"Madeline Miller"
    },
    {
        text: "One doesn't have to lie to deceive.", 
        author:"Holly Black"
    },
    {
        text: "He didn't live. He existed. And no one understood the difference between the two until they ceased to live.", 
        author:"Hafsah Faizal"
    },
    {
        text: "Your silence was another language I failed to learn.",
        author: "Ocean Vuong"
    },
    {
        text: "الشمس تشرق كل يوم لكن الظل يبقى ",
        author: "محمود درويش"
    },
    {
        text: "أحيانًا يموت الإنسان قبل أن يولد، ولا يولد إلا حين يجد معنى يحيى لأجله",
        author: "أحمد خالد توفيق"
    },
    {
        text: "The silence between us grew teeth and bit through what was left.",
        author: "Clementine von Radics"
    },
    {
        text: "I'm just a shadow of your shadow, But isn't that the closest we can be?.", 
        author:"Tamino"
    },
    {
        text: "Our nights are drunk on empty memories.", 
        author:"Amr Diab"
    },
    {
        text: "On danse sur des ruines, Le futur est un mirage.", 
        author:"Soolking"
    },
    {
        text: "Choose your last words, this is the last time Cause you and I, we were born to die.", 
        author:"Lana Del Rey"
    },
    {
        text: "I'm the nicotine, I'm your rush." , 
        author:"The Weeknd"
    },
    {
        text: "Je suis un crime qui s'ignore. Une plaie qui saigne des mots.", 
        author:"Félix Dyotte"
    },
    {
        text: "Je suis un reflet dans les yeux d'un inconnu Une ombre qui danse sous la lune.", 
        author:"Claire Laffut"
    },
    {
        text: "L'homme n'est pas ce qu'il croit être, il est ce qu'il cache.", 
        author:"André Malraux"
    },
    {
        text: "Je suis le fantôme de tes nuits blanches.", 
        author:"Louane"
    },
    {
        text: "You probably could have had it all, you could have been that lonely star if we just went on.", 
        author:"The Weeknd"
    },
    {
        text: "It is never too late to be what you might have been.", 
        author:"George Eliot"
    },
    {
        text: "And in that moment, I swear we were infinite.", 
        author:"Stephen Chbosky"
    },
    {
        text:"Friends forever might have been a tired expression, but when he asked, it was like music or poetry. i knew it meant something else. i knew it meant i need you in my life.",
        author:"Renèe Carlino"
    },
    {
        text:"I might be totally out of my mind, but would ou like to get a drink with me and catch up on the last decade and half?.",
        author:"Renèe Carlino"
    },
    {
        text:"Song Title: Rain, in your black eyes.",
        author:"Ezio Bosso"
    },
    {
        text:"Sond Title: J'y suis jamais allé.",
        author:"Mercuzio Pianist"
    },
    {
        text:"Song Title: With love comes loss.",
        author:"John Powell, Batu Sener"
    },
    {
        text:"إِذا غامَرتَ في شَرَفٍ مَرومٍ ... فَلا تَقنَع بِما دونَ النُجومِ.  فَطَعمُ المَوتِ في أَمرٍ صَغيرٍ ... كَطَعمِ المَوتِ في أَمرٍ عَظيمِ. سَتَبكي شَجوَها فَرَسي وَمُهري ... صَفائِحُ دَمعُها ماءُ الجُسومِ.  قَرَبنَ النارَ ثُمَّ نَشَأنَ فيها ... كَما نَشَأَ العَذارى في النَعيمِ. وَفارَقنَ الصَياقِلَ مُخلَصاتٍ ... وَأَيديها كَثيراتُ الكُلوم. يَرى الجُبَناءُ أَنَّ العَجزَ عَقلٌ ... وَتِلكَ خَديعَةُ الطَبعِ اللَئيمِ. وَكُلُّ شَجاعَةٍ في المَرءِ تُغني ... وَلا مِثلَ الشَجاعَةِ في الحَكيمِ. وَكَم مِن عائِبٍ قَولاً صَحيحاً ... وَآفَتُهُ مِنَ الفَهمِ السَقيمِ. وَلَكِن تَأخُذُ الآذانُ مِنهُ ... عَلى قَدرِ القَرائِحِ وَالعُلومِ",
        author:"ابو الطيب المتنبي"
    },
    {
        text:"After Hardship, allah will bring about ease.",
        author:"Qur'an 65:7"
    },
    {
        text:"Wanderer above the Sea of Fog - (1818)",
        author:"Caspar David Friedrich"
    },
    {
        text:"Slow down you're doing fine. you can't be everything you want to be before your time.",
        author:"Billy Joel"
    },
    {
        text:"The darker the night, the brighter the stars, the deeper the grief, the closer is God.",
        author:"Fyodor Dostoyevsky"
    },
    {
        text:"Talk nonsense, but talk your own nonsense, and i'll kiss you for it. To go wrong in your own way is better than to go right in someone else's.",
        author:"Fyodor Dostoyevsky"
    },
    {
        text:"Song Title: W.D.Y.W.F.M?",
        author:"The Neighbourhood"
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    },
    {
        text:"",
        author:""
    }
];

// DOM Elements
const elements = {
    quoteText: document.getElementById('quote-text'),
    quoteAuthor: document.getElementById('quote-author'),
    flipBtn: document.getElementById('flip-btn'),
    welcomePopup: document.getElementById('welcomePopup'),
    closePopup: document.getElementById('closePopup')
};

// Create limit popup element
const limitPopup = document.createElement('div');
limitPopup.className = 'welcome-popup';
limitPopup.innerHTML = `
    <div class="popup-content">
        <h3>Daily Limit Reached</h3>
        <p>You've viewed your 3 daily quotes. Come back in <span id="countdown">24 hours</span> for more!</p>
        <button id="closeLimitPopup">Okay</button>
    </div>
`;
document.body.appendChild(limitPopup);

// State management
const state = {
    viewedQuotes: [],
    quoteCount: 0,
    lastAccess: null,
    countdownInterval: null
};

// Initialize from localStorage
function loadState() {
    const savedState = localStorage.getItem('quoteState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        state.viewedQuotes = parsed.viewedQuotes || [];
        state.quoteCount = parsed.quoteCount || 0;
        state.lastAccess = parsed.lastAccess ? new Date(parsed.lastAccess) : null;
        
        // Check if 24 hours have passed
        if (state.lastAccess && (new Date() - state.lastAccess) >= 24 * 60 * 60 * 1000) {
            resetDailyLimits();
        }
    }
}

function saveState() {
    state.lastAccess = new Date();
    localStorage.setItem('quoteState', JSON.stringify(state));
}

function resetDailyLimits() {
    state.viewedQuotes = [];
    state.quoteCount = 0;
    state.lastAccess = new Date();
    saveState();
    
    // Clear any existing countdown
    if (state.countdownInterval) {
        clearInterval(state.countdownInterval);
    }
}

// Get a non-repeating random quote
function getRandomQuote() {
    const availableQuotes = quotes.filter(quote => 
        !state.viewedQuotes.includes(quote.text)
    );
    
    if (availableQuotes.length === 0) {
        // If all quotes have been shown, reset the viewed list
        state.viewedQuotes = [];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    return availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
}

function showLimitPopup() {
    limitPopup.classList.add('show');
    
    // Set up countdown timer
    const countdownElement = document.getElementById('countdown');
    const resetTime = new Date(state.lastAccess.getTime() + 24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date();
        const diff = resetTime - now;
        
        if (diff <= 0) {
            countdownElement.textContent = "less than a minute";
            clearInterval(state.countdownInterval);
            resetDailyLimits();
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }
    updateCountdown();
    state.countdownInterval = setInterval(updateCountdown, 1000); 
}

// Display quote with fade animation
function displayQuote() {
    // Check daily limit
    if (state.quoteCount >= 3) {
        showLimitPopup();
        return;
    }
    
    const { text, author } = getRandomQuote();
    
    // Fade out
    elements.quoteText.style.opacity = 0;
    elements.quoteAuthor.style.opacity = 0;
    
    // Update text after fade
    setTimeout(() => {
        elements.quoteText.textContent = text;
        elements.quoteAuthor.textContent = author;
        
        // Fade in
        elements.quoteText.style.opacity = 1;
        elements.quoteAuthor.style.opacity = 1;
        
        // Update state
        state.viewedQuotes.push(text);
        state.quoteCount++;
        saveState();
    }, 300);
}

// Event Listeners
elements.flipBtn?.addEventListener('click', displayQuote);
elements.closePopup?.addEventListener('click', () => {
   elements.welcomePopup.classList.remove('show');   localStorage.setItem('visited', 'true');
});

document.getElementById('closeLimitPopup')?.addEventListener('click', () => {
    limitPopup.classList.remove('show');
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    displayQuote();
    checkFirstVisit();
});
