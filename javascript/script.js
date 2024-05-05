let word = document.getElementById("word");
    let character = document.getElementById("character");
    let sentance = document.getElementById("sentance");
    let paragraph = document.getElementById("paragraph");
    let line = document.getElementById("line");

    // variable for counting

    function wordcount() {
        let text = document.getElementById("textinput").value;
        let w = 0;
        let c = 0;
        let s = 0;
        let p = 0;
        let l = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == " " && text[i+1]!=" ") {
                w++;
            }
            if (text[i] == "\n") {
                l++;
            }
            if (text[i] == ".") {
                s++;
            }
            if (text[i] == "\n" && text[i + 1] == "\n") {
                p++;
            }
        }
        word.innerText = w;
        character.innerText = text.length;
        sentance.innerText = s;
        paragraph.innerText = p+1;
        line.innerText = l+1;

    }