var kart = ["1.png", "1.png", "2.png", "2.png", "3.png", "3.png", "4.png", "4.png", "5.png", "5.png", "6.png", "6.png"];

var karty = kart.sort(() => Math.random() - 0.55);

var k0 = document.getElementById("k0");
var k1 = document.getElementById("k1");
var k2 = document.getElementById("k2");
var k3 = document.getElementById("k3");
var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");
var k6 = document.getElementById("k6");
var k7 = document.getElementById("k7");
var k8 = document.getElementById("k8");
var k9 = document.getElementById("k9");
var k10 = document.getElementById("k10");
var k11 = document.getElementById("k11");

k0.addEventListener("click", function() { pokazkarty(0); });
k1.addEventListener("click", function() { pokazkarty(1); });
k2.addEventListener("click", function() { pokazkarty(2); });
k3.addEventListener("click", function() { pokazkarty(3); });
k4.addEventListener("click", function() { pokazkarty(4); });
k5.addEventListener("click", function() { pokazkarty(5); });
k6.addEventListener("click", function() { pokazkarty(6); });
k7.addEventListener("click", function() { pokazkarty(7); });
k8.addEventListener("click", function() { pokazkarty(8); });
k9.addEventListener("click", function() { pokazkarty(9); });
k10.addEventListener("click", function() { pokazkarty(10); });
k11.addEventListener("click", function() { pokazkarty(11); });

var widoczna = false;
var ruchy = 0;
var pierwszawidoczna;
var zablokuj = false;
var zostalo = 6;
	
function pokazkarty (nr)
{
	var przezrwart = $("#k"+nr).css("opacity");
	if (przezrwart != 0 && zablokuj == false)
		{
			zablokuj = true;
			var obraz = "url(png/"+karty[nr] + ")";
			$("#k"+nr).css("background-image", obraz);
			if (widoczna == false)
			{
				widoczna = true;
				pierwszawidoczna = nr;
				zablokuj = false;
			}
		else
			{
				if(karty[pierwszawidoczna] == karty[nr])
					{

						setTimeout(function() { schowajkarty(nr, pierwszawidoczna) }, 750);
					}
				else 
					{
						setTimeout(function() { przywrockarty(nr, pierwszawidoczna) }, 750);
					}
				
			ruchy++;
			$(".wynik").html("Ruchów: "+ruchy);
			widoczna = false;
		}
		}
	

}

function schowajkarty(nr1, nr2)
{
	$("#k"+nr1).css("opacity", 0);
	$("#k"+nr2).css("opacity", 0);
	zablokuj = false;
	zostalo --;
	if(zostalo == 0)
		{
			$("#tytul").html("Wygrałeś, moje gratulacje!")
		}
}

function przywrockarty(nr1, nr2)
{
	$("#k"+nr1).css("background-image", "url(png/tyl.png)");
	$("#k"+nr2).css("background-image", "url(png/tyl.png)");
	zablokuj = false;
}