$("button").click(function() {
        var age = $(".age").val();
        var element = $(".element").val();
        if (age >= 1 && age <= 12 && element === "Water") {
            $("h2").text("Naruto");
        } else if (age >= 13 && age <= 18 && element === "Wind") {
            $("h2").text("Sakura");
        } else if (age >= 19 && age <= 30 && element === "Lightning") {
            $("h2").text("Sasuke");
        } else if (age >= 31 && age <= 60 && element === "Earth") {
            $("h2").text("Sai");
        } else {
            $("h2").text("Nothing!");
        }
});