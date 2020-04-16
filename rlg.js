$(document).ready(function(){

    $("button").click(function(){

        var outputh1 = document.getElementById("outputh1");

        outputh1.style.fontSize = "10em";
        outputh1.innerHTML = generateLetters(1);

    });

    function generateLetters(length) {
        var result           = '';
        // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

});