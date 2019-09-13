
var smallPizza = prompt("Hoeveel Small pizza's wilt u? ($6.20)");
var prijsSmall = 6.20;
document.write("Kosten Small $", smallPizza*prijsSmall+"<br>");

var mediumPizza = prompt("Hoeveel Medium Pizza's wilt u? ($8.70)");
var prijsMedium = 8.70;
document.write("Kosten Medium $", mediumPizza*prijsMedium+"<br>"); 

var largePizza = prompt ("Hoeveel Large Pizza's wilt u? ($10.50)");
var prijsLarge = 10.50;
document.write("Kosten Large $", largePizza*prijsLarge+"<br>");

var totaalSmall= smallPizza*prijsSmall;
var totaalMedium= mediumPizza*prijsMedium;
var totaalLarge= largePizza*prijsLarge;

document.write("Totaal Prijs: $",totaalSmall+totaalMedium+totaalLarge);

