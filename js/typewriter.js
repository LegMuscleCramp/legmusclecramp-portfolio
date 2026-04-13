// typewriter functionality
var typewriter = {
    g: {
        wordIndex: 0,
        target: null,
        words: []
    },
    typewriterInit: function(twTargetId,twWords) {
        var target = document.getElementById(twTargetId);
        target.innerHTML = ' <span class="tw-cursor">|</span>';
        typewriter.g.target = target.childNodes[0];
        typewriter.g.words = twWords;
        setTimeout(function() {
            typewriter.typewriterWriting(typewriter.g.words[0]);
        },1500);
    },
    typewriterWriting: function(string) {
        var i = 0;
        addLetter();
        function addLetter() {
            typewriter.g.target.textContent += string.charAt(i);
            i++;
            if(i<string.length) {
                setTimeout(addLetter,70);
            } else {
                setTimeout(function(){
                    typewriter.typewriterErasing(typewriter.g.target);
                },1500);
            }
        }
    },
    typewriterErasing: function(target) {
        var i = target.textContent.length;
        removeLetter();
        function removeLetter() {
            target.textContent = target.textContent.substr(0,i);
            i--;
            if(i>0) {
                setTimeout(removeLetter,70);
            } else {
                typewriter.g.wordIndex = (typewriter.g.wordIndex+1)%typewriter.g.words.length;
                setTimeout(function() {
                    typewriter.typewriterWriting(typewriter.g.words[typewriter.g.wordIndex]);
                },1000);
            }
        }
    }
}

typewriter.typewriterInit('#code-typewriter',['pretty','useful','funny','responsive','cool','functional']);
