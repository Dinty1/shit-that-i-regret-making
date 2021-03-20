function englishToFrockwa() {
    var input = document.getElementById("english").value;
    //next, we want to insert spaces between punctuation and non-letter characters
    var inputWithSpacesInserted = "";
    var chars = input.split("");
    for (let i in chars) {
        if (chars[i].match(/[^a-z]+/g)) {
            inputWithSpacesInserted += " ";
        } else if (chars[i - 1] && chars[i - 1].match(/[^a-z]+/g)) {
            inputWithSpacesInserted += " ";
        }
        inputWithSpacesInserted += chars[i]
    }
    //split up the new input
    var splitInput = inputWithSpacesInserted.split(" ");
    var output = "";
    for (const phrase of splitInput) {
        let splitPhrase = phrase.split("");
        try {
            splitPhrase[0] = splitPhrase[0].toUpperCase();
        } catch (e) {

        }
        output += splitPhrase.join("") + " ";
    }
    document.getElementById("output").innerHTML = output;
}