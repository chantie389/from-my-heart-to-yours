const reasons = [
    "You're God-fearing.",
    "You love me, and I never take that for granted.",
    "You constantly reassure me.",
    "You always want to talk to me.",
    "You're always honest with me.",
    "You're the true definition of “if he wanted to, he would.”",
    "You never get tired of me.",
    "You never fail to compliment me.",
    "You always listen to me.",
    "You take care of me.",
    "Somehow, I'm your favourite person.",
    "You chose me.",
    "You always want to be a part of my day what I do, what I wear, what I eat, everything.",
    "You never want me to go to bed upset because of you.",
    "You constantly remind me of how much I mean to you.",
    "You initiated our relationship.",
    "You never make me feel insignificant or belittled.",
    "You deny your flesh with me.",
    "You respect me.",
    "You pray for me and with me.",
    "We share and exchange the Word of God with each other.",
    "We can laugh together.",
    "We can talk about absolutely anything.",
    "You're open with me.",
    "I can completely be myself around you.",
    "You never make me feel excluded.",
    "You keep me updated about your day and make me feel included in it.",
    "You speak life and light over me and my life.",
    "You make loving you feel easy.",
    "You trust me.",
    "I love how intentional you are with me.",
    "I love how you notice when my mood is off.",
    "You call to wake me up for school.",
    "You pay attention to the little things.",
    "You remember the little things and let them mean something.",
    "You go out of your way to make me smile.",
    "You care about how your words make me feel.",
    "I love how observant you are.",
    "You want to make things right when you notice I'm not okay.",
    "I love how you make me feel thought of, even when I'm not around.",
    "I love the way you surprise me.",
    "I love that you turn your thoughts into actions.",
    "I love how naturally caring you are.",
    "I love that you make an effort without needing me to ask.",
    "I love that you make me feel special in the little moments, not just the big ones.",
    "I love your heart.",
    "I love how pure and genuine your intentions feel.",
    "You call me princess and it has a meaning behind it.",
    "You can turn an ordinary conversation into something I genuinely look forward to.",
    "You always make sure to make me feel better after a bad day.",
    "You share the little details of your day with me.",
    "Hearing you say “I love you” never gets old.",
    "You're my biggest supporter.",
    "You always make sure to clarify things for me.",
    "You're empathetic towards me.",
    "You wanted to give journaling a try after finding out it's my favourite hobby.",
    "You always tell me I look pretty, even when I think I look crusty.",
    "You sleep on a call with me.",
    "You compliment my style.",
    "You're very much chalant and always show me that you love me.",
    "You go out of your way to reassure me by showing me where you are or what you're doing.",
    "You don't just say you love me you express it in the way you treat me.",
    "You express your feelings instead of making me guess how you feel.",
    "You write me heartfelt letters about moments that genuinely mean something to you.",
    "You still want to talk to me even when you're sick.",
    "You pay attention to everything I say.",
    "You make sure I feel included in your life.",
    "You tell me what you're getting up to.",
    "You listen even when I have a lot to say.",
    "You tell me things you don't necessarily have to tell me.",
    "You watch my favourite soppy show with me.",
    "You constantly blow up my phone with reels that remind you of me.",
    "You constantly check up on me when I'm sick.",
    "You remind me that you're there for me when I'm sick.",
    "You know you're my boyfriend and never miss a chance to remind me that I'm your baby.",
    "You remind me to pray before I sleep.",
    "You watch reels with me.",
    "You're just a sweet boy.",
    "You never fail to put a smile on my face.",
    "You're funny.",
    "You speak your thoughts out to me.",
    "You dedicate songs to me.",
    "You remember the things I tell you.",
    "You make me feel cared for, even in the smallest ways.",
    "You joke with me.",
    "You teach me new things.",
    "I never feel like I have to pretend to be someone else around you.",
    "You make even the most ordinary conversations feel special.",
    "You make me feel safe enough to be vulnerable with you.",
    "You make me feel like I can bring my whole heart to you.",
    "You take an interest in the things that matter to me.",
    "You never leave me guessing about how you feel about me.",
    "You make me feel seen, not just loved.",
    "You're willing to learn me my likes, my dislikes, my moods, and all the little things that make me who I am.",
    "You make me feel like my presence in your life genuinely matters.",
    "You don't just hear me; you try to understand me.",
    "I love the way you make me laugh when I don't even feel like laughing.",
    "The way you love me makes me want to keep growing and becoming a better version of myself.",
    "I love the little pieces of yourself that you allow me to know.",
    "Out of all the people I could have met, somehow I get to love you."
];


let currentReasonScreen = 0;

const reasonsPerScreen = 5;
const totalScreens = Math.ceil(reasons.length / reasonsPerScreen);


/* =========================
   SECTION NAVIGATION
========================= */

function showSection(sectionId) {

    const sections = [
        "hero",
        "reasons",
        "message",
        "prayer",
        "song",
        "details",
        "ending"
    ];

    sections.forEach(function(id) {

        const section = document.getElementById(id);

        if (section) {
            section.classList.add("hidden");
        }

    });

    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (sectionId === "ending") {
        startTypingAnimation();
    }
}


/* =========================
   REASONS
========================= */

function displayReasons() {

    const reasonsList = document.getElementById("reasonsList");
    const reasonRange = document.getElementById("reasonRange");
    const reasonCounter = document.getElementById("reasonCounter");
    const previousButton = document.getElementById("previousReasonButton");
    const nextButton = document.getElementById("nextReasonButton");

    if (!reasonsList) {
        return;
    }

    reasonsList.innerHTML = "";

    const startIndex = currentReasonScreen * reasonsPerScreen;
    const endIndex = Math.min(
        startIndex + reasonsPerScreen,
        reasons.length
    );

    for (let i = startIndex; i < endIndex; i++) {

        const reasonItem = document.createElement("div");

        reasonItem.className = "reason-item";

        reasonItem.textContent = reasons[i];

        reasonsList.appendChild(reasonItem);
    }

    const firstReason = startIndex + 1;
    const lastReason = endIndex;

    reasonRange.textContent =
        `Reasons ${firstReason}–${lastReason}`;

    reasonCounter.textContent =
        `${currentReasonScreen + 1} / ${totalScreens}`;

    if (currentReasonScreen === 0) {

        previousButton.style.visibility = "hidden";

    } else {

        previousButton.style.visibility = "visible";
    }

    if (currentReasonScreen === totalScreens - 1) {

        nextButton.textContent =
            "There's more I want you to know →";

    } else {

        nextButton.textContent =
            "Keep going →";
    }
}


function nextReasonScreen() {

    if (currentReasonScreen < totalScreens - 1) {

        currentReasonScreen++;

        displayReasons();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        showSection("message");
    }
}


function previousReasonScreen() {

    if (currentReasonScreen > 0) {

        currentReasonScreen--;

        displayReasons();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================
   FINAL TYPING ANIMATION
========================= */

function startTypingAnimation() {

    const typingText = document.getElementById("typingText");
    const signature = document.getElementById("signature");

    if (!typingText) {
        return;
    }

    const phrases = [
        "This",
        "This is",
        "This is only",
        "This is only the",
        "This is only the beginning."
    ];

    typingText.textContent = "";

    if (signature) {
        signature.style.opacity = "0";
    }

    let phraseIndex = 0;

    function showNextPhrase() {

        if (phraseIndex >= phrases.length) {

            if (signature) {
                setTimeout(function() {
                    signature.style.opacity = "1";
                }, 700);
            }

            return;
        }

        typingText.style.opacity = "0";

        setTimeout(function() {

            typingText.textContent = phrases[phraseIndex];

            typingText.style.opacity = "1";

            phraseIndex++;

            setTimeout(showNextPhrase, 1300);

        }, 500);
    }

    showNextPhrase();
}


/* =========================
   INITIAL LOAD
========================= */

document.addEventListener("DOMContentLoaded", function() {

    displayReasons();

    showSection("hero");

});