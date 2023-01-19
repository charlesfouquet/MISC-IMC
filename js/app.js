$("#submitButton").on("click", function(){
    calculateIMC(event);
})

function calculateIMC(event) {
    event.preventDefault();

    var userSize = $("#userSize").val();
    var userWeight = $("#userWeight").val();
    var IMC = (userWeight / (Math.pow((userSize / 100), 2))).toFixed(1);

    if (((userSize == "") || (isNaN(userSize) === true)) || ((userWeight == "") || (isNaN(userWeight) === true))) {
        $("#inputError").text("Un ou plusieurs champs sont vides et/ou mal renseignés.").slideDown("fast").css("color","rgb(246,48,62)");
        $("#userResult").slideUp("fast");
    } else if (((userSize != "") && (isNaN(userSize) === false)) && ((userWeight != "") && (isNaN(userWeight) === false))) {
        $("#inputError").text("Valeurs correctes").css("color","rgb(51, 165, 51)").delay(500).slideUp("slow");
        $("#numResult").html(IMC);
        if (IMC < 18.5) {
            $("#numResult").css("color", "rgb(246, 144, 48)");
            $("#textResult").html("Votre IMC est inférieur à 18,5 kg/m². Vous êtes donc en insuffisance pondérale.").css("color", "rgb(246, 144, 48)");
        } else if ((IMC >= 18.5) && (IMC <= 25)) {
            $("#numResult").css("color", "rgb(51, 165, 51)");
            $("#textResult").html("Votre IMC est compris entre 18,5 kg/m² et 25 kg/m².<br>Vous avez donc un IMC normal.").css("color", "rgb(51, 165, 51)");
        } else if ((IMC > 25) && (IMC <= 30)) {
            $("#numResult").css("color", "rgb(246, 144, 48)");
            $("#textResult").html("Votre IMC est compris entre 25 kg/m² et 30 kg/m². Vous êtes donc en surpoids.").css("color", "rgb(246, 144, 48)");
        } else if (IMC > 30) {
            $("#numResult").css("color", "rgb(246,48,62)");
            $("#textResult").html("Votre IMC est supérieur à 30 kg/m². Vous présentez donc des signes d'obésité.").css("color", "rgb(246,48,62)");
        }
        $("#userResult").slideDown("fast");
    }
}