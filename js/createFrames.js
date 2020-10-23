
// texte à afficher
const texte = "Font variable"
// nombre d'image à generer pour le flip book
const Frames = 100;        

// Itération produisant les x frames
for(let i = 0; i < Frames; i++) {
    // Création d'une frame
    let frameDOM = document.createElement("main")
    frameDOM.classList.add("frame")
    // Création de la balise paragraphe
    let textDOM = document.createElement("p")
    frameDOM.appendChild(textDOM)

    // Calcule d'une valeur de "progression" de 0,(le début) à 1 (la fin)
    let val = i / Frames

    // Ajout du texte
    textDOM.innerHTML = texte
    // Modification de la graisse et de la largeur en fonction de la "progression"
    textDOM.style.setProperty('--txt-width', val * 200)
    textDOM.style.setProperty('--txt-weight', (1 - val) * 200)

    // On ajoute la frame à la page HTML
    document.body.appendChild(frameDOM)
}