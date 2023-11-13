const distanza= parseFloat(prompt(`(Scrivi la distanza del tuo viaggio in km)`));
const eta= parseInt(prompt(`(Scrivi la tua eta)`));

let prezzo = distanza * 0.21;

if (eta < 18){
    prezzo = prezzo * 0.8;
} else if (eta >= 65){
    prezzo = prezzo * 0.6;
}
document.getElementById (`js`).innerHTML = `Il prezzo finale è: ${prezzo.toFixed(2)}`

