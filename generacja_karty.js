//Generuje całą talię kart
var typy = ["♠", "♣", "♥", "♦"];
var rangi = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var talia =[];

for(razytypy = 0; razytypy < 4; razytypy++) {
	for(razyrangi = 0; razyrangi < 13; razyrangi++) {
		talia.push(rangi[razyrangi] + typy[razytypy]);
	}
}

taliakart = talia.sort(() => Math.random() - 0.5);

//Skrypt generujący kartę
rangikart = rangi.sort(() => Math.random() - 0.5);
typykart = typy.sort(() => Math.random() - 0.5);

document.getElementById("typ").innerHTML = typykart[0];
var iloscdiv = document.getElementById("ilosc")
iloscdiv.dataset.liczba = typykart [0] + " " + rangikart[0];

if (typykart[0] === "♠" || typykart[0] === "♣")
	document.getElementById("przod").style.color = "#000000";
else
	document.getElementById("przod").style.color = "#FF0000";