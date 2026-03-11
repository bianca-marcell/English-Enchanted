alert("Hello, welcome to English Enchanted! ✨🥂");

function displaySentence(response){
    //response.data.answer (the generated response)
    console.log("Generated Sentence.");

    new Typewriter('#generatedSentence', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateSentence(event){
    event.preventDefault();

    //Get the user's sentence to rewrite
    let sentenceInput = document.querySelector("#userSentence");

    //Integrating AI api to rewrite the sentence
    let apiKey = "37o4e4b010b515a5211ft494b63bc7b0";
    let prompt = `Rewrite this sentence: ${sentenceInput.value}; in old english, shakespeare style english.`;
    let context = "You are a timeless and old school englishmen. You love to rewrite sentences in old english, shakespeare style. Your mission is to rewrite a given sentence, and you seperate each line with an HTML <br />. Make sure to use the user's instruction as the sentence you rewrite. Do not include a title of the sentence. Sign your sentence with '~ Sincerely SheCodes AI' inside a <strong> element at the end of the sentence.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let sentenceElement = document.querySelector("#generatedSentence");
    sentenceElement.classList.remove("hidden");
    sentenceElement.innerHTML = `<div class="generating">🪶 Contacting ye old scholars...  <br/> </div>`;
    sentenceElement.innerHTML = `<div class="generating">✨ Enchanting:"${sentenceInput.value}"...</div>`;

    console.log(`Enchanting this sentence: ${sentenceInput.value}...`);
    console.log(`Context: ${context}...`);

    //Call the api
    axios.get(apiURL).then(displaySentence)

}

let sentenceFormElement = document.querySelector("#sentenceGenerator");
sentenceFormElement.addEventListener("submit", generateSentence);