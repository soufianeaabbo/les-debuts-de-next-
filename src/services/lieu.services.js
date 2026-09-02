import lieux from '@/data/lieux-events.json'


function delay(time = 1_000) {
    // Envoi d'une promesse
    return new Promise((resolve) => {
        // Le "resolve" de la promesse est activé après un delai (via timeout)
        setTimeout(resolve, time);
    });
}

const LieuService = {

    getAll: async () => {
        
        // Attente de 3 secondes
        await delay(3_000);

        return lieux.map(lieu => ({
            id : lieu.id,
            name: lieu.name,
        }));

    },

    getById: async (id) => {

        // Attente de 3 secondes
        await delay(3_000);

        const idx = lieux.findIndex(lieu => lieu.id === id)

        return (idx >= 0) ? lieux[idx] : null;
       
    }





};

export default LieuService;