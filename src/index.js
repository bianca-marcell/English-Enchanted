alert("Hello, welcome to Expensive English! 🥂");

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

    //Integrating AI api to generate the poem
    let apiKey = "37o4e4b010b515a5211ft494b63bc7b0";
    let prompt = `Generate a poem about ${topicInput.value}`;
    let context = "You are a timeless and creative poet and love to write short poems. Your mission is to write a 5 line poem, and you seperate each line with an HTML <br />. Make sure to use the user's instruction as the topic of the poem you write. Do not include a title of the poem. Sign your poem with '~ SheCodes AI' inside a <strong> element at the end of the poem.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#generatedPoem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛ Generating your poem about ${topicInput.value}...</div>`;

    console.log(`Generating a Poem about ${topicInput.value}...`);
    console.log(`Context: ${context}...`);

    //Call the api
    axios.get(apiURL).then(displayPoem)

    //Display the generated poem:
    //let poemElement = document.querySelector("#generatedPoem");
    //poemElement.innerHTML = "To Be or Not to Be...";

    //new Typewriter('#generatedPoem', {
    //    strings: "To Be or Not to Be...",
    //    autoStart: true,
    //    delay: 1,
    //    cursor: "",
    //});

}

let poemFormElement = document.querySelector("#poemGenerator");
poemFormElement.addEventListener("submit", generatePoem);