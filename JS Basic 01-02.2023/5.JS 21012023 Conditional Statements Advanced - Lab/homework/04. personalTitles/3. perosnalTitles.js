//TODO: това е най-правилното решение от трите!

function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (sex === "f") {
        if (age < 16) {               
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    } else {
        if (age < 16){               
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    }
}
personalTitles(["12", "f"]);
//personalTitles(["13.5", "m"]);
//personalTitles(["17", "m"]);
//personalTitles(["25", "f"]);






// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години