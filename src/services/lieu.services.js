import lieux from '@/data/lieux-events.json'


const LieuService = {

    getAll: () => {
        // Renvoi la copie de donnée transformé
        return lieux.map(lieu => ({
            id : lieu.id,
            name: lieu.name,
        }));
    },

    getById: (id) => {

        const idx = lieux.findIndex(lieu => lieu.id === id)

        return (idx >= 0) ? lieux[idx] : null;
       
    }

};

export default LieuService;