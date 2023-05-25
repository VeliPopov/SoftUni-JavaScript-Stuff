function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16) {                              //FIXME: прави го обратно, проверява по възраст, а не по пол - затова всичко е на опаки
        if (sex === "f") {               
            console.log("Ms.");
        } else {
            console.log("Mr.");
        }
    } else {
        if (sex === "f") {                   
            console.log("Miss");
        } else {
            console.log("Master");
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