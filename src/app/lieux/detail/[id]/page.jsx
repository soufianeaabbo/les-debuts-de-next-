import LieuService from '@/services/lieu.services';
import { notFound } from 'next/navigation';


// /plante/detail/:id
export default async function LieuDetailPage({ params }) {

    // Récuperation de la valeur de l'id (Route dynamique)
    const id = parseInt((await params).id);

    // Utilisation de PlantService pour obtenir les données
    const lieu = LieuService.getById(id);

    // Cas de figure : La plante n'est pas trouvé (valeur null)
    if(!lieu) {
        notFound(); // → Déclanche l'erreur 404
    }
 
    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Détail de {lieu.name} </h1>
            <p>adresse: {lieu.address.street}</p>
        </main>
    );
}