function rollDice(){
    const input=document.getElementById("input");
    const result=document.getElementById("result");
    const imagesdice=document.getElementById("imagesdice");
    const values=[];
    const images=[];

    for (let i = 0; i < input.value; i++) {
        const random=Math.floor(Math.random()*6)+1;
        values.push(random);
        images.push(`<img src="diceimages/${random}.png" alt="dice${random}">`) ;
    }
    result.textContent=`Dice: ${values.join('        ')}`;
    imagesdice.innerHTML=images;
}