const API_URL = "http://localhost:3001/utilisateurs";




// export async function ajouterInscriptionAPI(utilisateurs) {



//     const reponse = await fetch(API_URL,{
//         method : "POST",

//         headers :{
//              "content-type" : "application/json"

//         },

//         body: JSON.stringify(utilisateurs)


//     })

//     if (!reponse.ok) {
//         throw new Error("Error lors de l'ajout de l'utilisateur");
        
        
//     }

//     return await reponse.json();
    
// }



export async function ajouterInscriptionAPI(utilisateurs) {

    const reponse = await axios.post(API_URL,utilisateurs);
    return reponse.data ;
    
}











