function okvir(x){
    
    if(x===1)
      document.getElementById("jakna1").style.border="3px solid black";
    else if(x===2)
      document.getElementById("jakna2").style.border= "3px solid black";
    else if(x===0){
      document.getElementById("jakna1").style.border="none";
      document.getElementById("jakna2").style.border="none";
    }
}

let paragraf=document.getElementById("paragraf");
let p=`<p>*Cene Flo&Clo jakna se kreću od 54.900,00 RSD*</p>`;
p+=`<p>*Veličine idu po Italijanskim brojevima 40-50*</p>`;
paragraf.innerHTML=p;

function velikaSlova(text){
   return text.toUpperCase();
}

function proveraForme(){
    
    let ime= document.getElementById("ime").value;
    let prezime= document.getElementById("prezime").value;
    let email= document.getElementById("email").value;
    let komentar= document.getElementById("komentar").value;

    ime=ime.toUpperCase();
    prezime=prezime.toUpperCase();

    const podaci=[ime,prezime,email];

    for(let i=0; i<podaci.length; i++){
        if(podaci[0]==="" || podaci[1]==="" || podaci[2]===""){
            alert("Molimo Vas unesite podatke u sva obavezna polja!");
            return;
        }
    }
    
    let ispis=`Vasi uneti podaci su: \n Ime: ${podaci[0]} \n Prezime: ${podaci[1]} \n Email: ${podaci[2]}`;
 
    podaci.push(komentar); 

    if(komentar !== "")
      ispis+=`\n Kometar: ${podaci[3]}`;


    alert(ispis);
}



