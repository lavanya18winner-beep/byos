/* ================= STORY DATA ================= */

const storyOptions = {

    Horror: [

        {
            value: "Dracula",
            text: "Dracula",
            description: "Dracula is Bram Stoker's famous Gothic horror novel about Count Dracula, an ancient vampire who travels from Transylvania to England. The story follows Jonathan Harker, Mina Murray, Van Helsing and others as they attempt to stop Dracula.",
            url: "https://www.gutenberg.org/ebooks/345"
        },

        {
            value: "The dreams in the witches House",
            text: "The Dreams in the Witch House",
            description: "The Dreams in the Witch House is a supernatural horror story by H. P. Lovecraft. It follows Walter Gilman, a student whose studies of mathematics and strange geometry lead him into terrifying supernatural experiences.",
            url: "https://en.wikipedia.org/wiki/The_Dreams_in_the_Witch_House"
        },

        {
            value: "The reaper of Washington city",
            text: "The Reaper of Washington City",
            description: "The Reaper of Washington City is presented as a dark and mysterious tale involving fear, death and unexplained events in Washington City.",
            url: "https://www.google.com/search?q=%22The+Reaper+of+Washington+City%22"
        },

        {
            value: "Frankenstein",
            text: "Frankenstein",
            description: "Mary Shelley's classic novel tells the story of Victor Frankenstein and the creature he creates through scientific experimentation.",
            url: "https://www.gutenberg.org/ebooks/84"
        },

        {
            value: "The Call of Cthulhu",
            text: "The Call of Cthulhu",
            description: "H. P. Lovecraft's famous cosmic horror story about ancient beings and forbidden knowledge.",
            url: "https://www.hplovecraft.com/writings/texts/fiction/cc.aspx"
        },

        {
            value: "The Turn of the Screw",
            text: "The Turn of the Screw",
            description: "Henry James's ghost story about a governess who encounters strange events in an isolated mansion.",
            url: "https://www.gutenberg.org/ebooks/209"
        }

    ],


    History: [

        {
            value: "Ten days that shook the world",
            text: "Ten Days That Shook the World",
            description: "Ten Days That Shook the World is John Reed's eyewitness account of the Russian Revolution of 1917.",
            url: "https://www.gutenberg.org/ebooks/30796"
        },

        {
            value: "Alexender the great",
            text: "Alexander the Great",
            description: "Alexander the Great was one of history's most successful military commanders. He created a vast empire stretching from Greece through Egypt and Persia.",
            url: "https://en.wikipedia.org/wiki/Alexander_the_Great"
        },

        {
            value: "The river war",
            text: "The River War",
            description: "The River War is Winston Churchill's account of the British campaign in Sudan during the late nineteenth century.",
            url: "https://www.gutenberg.org/ebooks/4943"
        },

        {
            value: "Julius Caesar",
            text: "Julius Caesar",
            description: "The life and achievements of one of Rome's greatest leaders.",
            url: "https://en.wikipedia.org/wiki/Julius_Caesar"
        },

        {
            value: "Napoleon Bonaparte",
            text: "Napoleon Bonaparte",
            description: "The story of the French military leader who shaped European history.",
            url: "https://en.wikipedia.org/wiki/Napoleon"
        },

        {
            value: "The French Revolution",
            text: "The French Revolution",
            description: "An overview of the events that transformed France and Europe.",
            url: "https://en.wikipedia.org/wiki/French_Revolution"
        },

        {
            value: "The Story of Mankind",
            text: "The Story of Mankind",
            description: "Hendrik Willem van Loon's famous history book covering human civilization.",
            url: "https://www.gutenberg.org/ebooks/201"
        }

    ],


    Mystery: [

        {
            value: "Whose body?",
            text: "Whose Body?",
            description: "Whose Body? is a detective mystery by Dorothy L. Sayers and introduces Lord Peter Wimsey.",
            url: "https://en.wikipedia.org/wiki/Whose_Body%3F"
        },

        {
            value: "The angel of terror",
            text: "The Angel of Terror",
            description: "The Angel of Terror is a mystery and suspense novel by Edgar Wallace involving inheritance, deception and danger.",
            url: "https://en.wikipedia.org/wiki/The_Angel_of_Terror"
        },

        {
            value: "The Hound of the Baskervilles",
            text: "The Hound of the Baskervilles",
            description: "One of Sherlock Holmes' most famous mysteries by Arthur Conan Doyle.",
            url: "https://www.gutenberg.org/ebooks/2852"
        },

        {
            value: "The Moonstone",
            text: "The Moonstone",
            description: "Wilkie Collins' classic detective novel involving a stolen diamond.",
            url: "https://www.gutenberg.org/ebooks/155"
        },

        {
            value: "The Secret Adversary",
            text: "The Secret Adversary",
            description: "Agatha Christie's thrilling mystery featuring Tommy and Tuppence.",
            url: "https://www.gutenberg.org/ebooks/1155"
        }

    ]

};


/* ================= GET ELEMENTS ================= */

const typeSelect = document.getElementById("Genre");

const subtypeSelect = document.getElementById("Genre-subtype");

const storyInfo = document.getElementById("storyInfo");

const counter = document.getElementById("counter");

const surpriseBtn = document.getElementById("surpriseBtn");


/* ================= TOTAL STORIES ================= */

const totalStories = Object.values(storyOptions)
    .reduce((total, stories) => total + stories.length, 0);

counter.innerHTML = `
    <span>${totalStories}</span>
    STORIES WAITING TO BE DISCOVERED
`;


/* ================= UPDATE COUNTER ================= */

function updateCounter() {

    const genre = typeSelect.value;

    if (!genre) {

        counter.innerHTML = `
            <span>${totalStories}</span>
            STORIES WAITING TO BE DISCOVERED
        `;

        return;
    }

    const count = storyOptions[genre].length;

    counter.innerHTML = `
        <span>${count}</span>
        STORIES AVAILABLE IN ${genre.toUpperCase()}
    `;

}


/* ================= GENRE CHANGE ================= */

typeSelect.addEventListener("change", function() {

    const selectedType = this.value;

    storyInfo.innerHTML = "";

    subtypeSelect.innerHTML =
        '<option value="">-- Choose a Story --</option>';

    subtypeSelect.disabled = !selectedType;

    document.body.dataset.theme = selectedType || "Horror";

    if (selectedType) {

        storyOptions[selectedType].forEach(function(story) {

            const option = document.createElement("option");

            option.value = story.value;

            option.textContent = story.text;

            subtypeSelect.appendChild(option);

        });

    }

    updateCounter();

});


/* ================= DISPLAY STORY ================= */

function displayStory(genre, story) {

    document.body.dataset.theme = genre;

    typeSelect.value = genre;

    subtypeSelect.innerHTML =
        '<option value="">-- Choose a Story --</option>';

    storyOptions[genre].forEach(function(item) {

        const option = document.createElement("option");

        option.value = item.value;

        option.textContent = item.text;

        subtypeSelect.appendChild(option);

    });

    subtypeSelect.disabled = false;

    subtypeSelect.value = story.value;

    updateCounter();

    storyInfo.innerHTML = `

        <div class="book-info">

            <div class="story-category">
                ✦ ${genre.toUpperCase()} COLLECTION ✦
            </div>

            <h2>${story.text}</h2>

            <p>${story.description}</p>

            <a
                href="${story.url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Discover This Story
            </a>

        </div>

    `;

    storyInfo.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* ================= STORY SELECTION ================= */

subtypeSelect.addEventListener("change", function() {

    const genre = typeSelect.value;

    const selectedBook = this.value;

    if (!selectedBook) {

        storyInfo.innerHTML = "";

        return;

    }

    const story = storyOptions[genre].find(function(book) {

        return book.value === selectedBook;

    });

    if (story) {

        displayStory(genre, story);

    }

});


/* ================= SURPRISE ME ================= */

surpriseBtn.addEventListener("click", function() {

    const genres = Object.keys(storyOptions);

    const randomGenre =
        genres[Math.floor(Math.random() * genres.length)];

    const stories = storyOptions[randomGenre];

    const randomStory =
        stories[Math.floor(Math.random() * stories.length)];

    displayStory(randomGenre, randomStory);

});


/* ================= CURSOR PARTICLES ================= */

let lastParticle = 0;

document.addEventListener("mousemove", function(event) {

    const now = Date.now();

    if (now - lastParticle < 90) {
        return;
    }

    lastParticle = now;

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.textContent = Math.random() > 0.5 ? "✦" : "·";

    particle.style.left = event.clientX + "px";

    particle.style.top = event.clientY + "px";

    document.body.appendChild(particle);

    setTimeout(function() {

        particle.remove();

    }, 850);

});