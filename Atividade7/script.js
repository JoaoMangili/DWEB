let numUser = prompt("1 - Papel\n 2 - Tesoura\n 3 - Pedra");
let escUser;
let numMac = Math.random();
let escMac;
let vitoria = " ganhou a partida, parabéns! ";
let derrota = " perdeu a partida, na próxima você consegue!"
let nameUser = prompt("Digite seu nome: ");
let nameMac = " Máquina";

if (numMac <= 0.33)
    {
        escMac = "Papel";
    }else if (numMac > 0.33 && numMac <= 0.66) 
    {
        escMac = "Tesoura"
    } else 
    {
      escMac = "Pedra";      
    }

if (numUser == 1)
    {
        escUser = "Papel";
    }else if (numUser == 2) 
    {
        escUser = "Tesoura"
    } else if(numUser == 3) 
    {
      escUser = "Pedra";      
    }

if(escUser == escMac)
{
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert("A partida empatou!");
} else if (escUser == "Papel" && escMac == "Tesoura") {
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert(nameMac + vitoria + nameUser + derrota); 
} else if (escUser == "Papel" && escMac == "Pedra") {
    alert(nameUser + " escolheu: " + nameMac + nameMac + " escolheu: " + escMac);
    alert(nameUser + vitoria + nameMac + derrota);
} else if (escUser == "Tesoura" && escMac == "Papel") {
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert(nameUser + vitoria +nameMac + derrota);
} else  if (escUser == "Tesoura" && escMac == "Pedra") {
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert(nameMac + vitoria + nameMac + derrota);
} else if (escUser == "Pedra" && escMac == "Papel"){
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert(nameMac + vitoria + nameUser + derrota);
} else if(escUser == "Pedra" && escMac == "Tesoura"){
    alert(nameUser + " escolheu: " + escUser + nameMac + " escolheu: " + escMac);
    alert(nameUser + vitoria + nameMac + derrota);
}