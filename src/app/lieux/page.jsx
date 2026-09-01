import LieuService from "@/services/lieu.services"


export default function locationPage(){

    const lieux = LieuService.getAll()

    return (
        <section>
            
            <h1>la page des lieux</h1>

            <div className="flex flex-col gap-2">
                {
                    lieux.map((e) => (
                        
                            <a href={`http://localhost:3000/lieux/detail/${e.id}`}> {e.name} </a>
                        
                    ))
                }
            </div>
            


        </section>
    )
}