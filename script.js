const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn1 = document.getElementById("but1");
const btn2 = document.getElementById("but2");
const btn3 = document.getElementById("but3");
const btn = document.getElementById("search-btn");
const soundbut = document.getElementById("sound-but");

btn1.addEventListener("click", () => {
  result.style.fontFamily = "sans-serif";
});
btn2.addEventListener("click", () => {
  result.style.fontFamily = "monospace";
});
btn3.addEventListener("click", () => {
  result.style.fontFamily = "serif";
});
btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                   
                    
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
      sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});
function playSound() {
  sound.play();
}
soundbut.addEventListener("click", playSound());
