
import { ajouterInscriptionAPI } from "./service.js/utilisateurService.js";

class connexion {
    constructor(email,mdp,nom,prenom,date,tel,ville,enfant,adulte,ado) {
        this.email = email;
        this.mdp = mdp ;
        this.prenom = prenom ;
        this.date = date ;
        this.tel = tel ;
        this.ville = ville ;
        this.enfant = enfant ;
        this.adulte = adulte ;
        this.ado = ado ;
        
    }


}



function ajouterInscription(){
    const formInscription = document.getElementById("inscription2");
    console.log(formInscription);
    if (!formInscription)return
    


formInscription.addEventListener("submit", async function (event) {

    event.preventDefault()

    
    let email = document.getElementById("email").value 
    let mdp = document.getElementById("mdp").value 
    let nom = document.getElementById("nom").value 
    let prenom = document.getElementById("prenom").value 
    let date = document.getElementById("date").value
    let tel = document.getElementById("tel").value
    let ville = document.getElementById("ville").value
    let enfant = document.getElementById("cours1").value
    let adulte = document.getElementById("cours2").value
    let ado = document.getElementById("cours3").value


    console.log(email,mdp,nom,prenom,date,tel,ville,enfant,adulte,ado);



    let utilisateur = new connexion(email,mdp,nom,prenom,date,tel,ville,enfant,adulte,ado);
    console.log(utilisateur);

    // const utilisateurs = JSON.parse(localStorage.getItem("users")) || [];

    // utilisateurs.push(utilisateur)
    // console.log(utilisateurs);

    // localStorage.setItem("users",JSON.stringify(utilisateurs));
    // formInscription.reset();


    
try {
     const nouveauxinscrit = await ajouterInscriptionAPI(utilisateur);
        console.log( nouveauxinscrit);


        formInscription.reset();
        alert("Inscription effectuer ")
       
    
} catch (error) {

    console.log(error);
    alert("Une erreur c'est produit recommencer")
    
      
    
}


    
    
    
})

}
ajouterInscription()



function connexionUtilisateurs(){

    const connect = document.getElementById("connected");
    if(!connect)return;



    connect.addEventListener("submit", function (event) {

        event.preventDefault();



        let email = document.getElementById("email").value
        let mdp = document.getElementById("password").value


        let utilisateurConnect = JSON.parse(localStorage.getItem("users")) || [];



    for (let i = 0; i < utilisateurConnect.length; i++) {
        if (utilisateurConnect[i].email === email && utilisateurConnect[i].mdp === mdp) {
            window.location.href = "../index.html"
            return;
            
        }
        
        
    }
    alert("mot de passe ou email incorrect");




        
    })
    





}

connexionUtilisateurs()