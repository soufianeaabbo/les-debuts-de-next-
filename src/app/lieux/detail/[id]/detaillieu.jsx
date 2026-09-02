import LieuService from "@/services/lieu.services";

// /lieux/detail/:id
export default async function Detaillieu({ params }) {

    // Récuperation de la valeur de l'id (Route dynamique)
    const id = parseInt((await params).id);

    // Utilisation de LieuServices pour obtenir les données
    // OUBLIE PAS LE AWAIT QUAND TU MET UNE FONCION EN ASYNC
    const lieu = await LieuService.getById(id);

    // Cas de figure : La le lieu n'est pas trouvé (valeur null)
    if(!lieu) {
        notFound(); // → Déclanche l'erreur 404
    }
    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Détail de {lieu.name} {lieu.address.city} {lieu.address.country} </h1>
            <p>adresse: {lieu.address.street}</p>
        </main>
    );
}