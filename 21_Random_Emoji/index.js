const btnElement = document.getElementById("btn");
const emojiNameElement = document.getElementById("emojiName");
const apiKey = '4fb1e3eaf1f6e59188dbdb8b1487d569ff851a13';
const emoji = [];

async function getEmoji(){
    let response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
    data = await response.json();
    
    for(let i = 0; i < 1500 ;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


btnElement.addEventListener("click", () => {
    const randomeNumber = Math.floor(Math.random() * emoji.length);
    btnElement.innerText = emoji[randomeNumber].emojiName;
    emojiNameElement.innerText = emoji[randomeNumber].emojiCode;
});