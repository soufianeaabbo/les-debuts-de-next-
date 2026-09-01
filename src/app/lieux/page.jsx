import LieuService from "@/services/lieu.services"


export default function locationPage(){

    const lieux = LieuService.getAll()

    return (
        <section>
            
            <h1>la page des lieux</h1>

            <div className="flex flex-col gap-2">
                {
                    lieux.map((e) => (
                        
                            <h2 className="">{e.name}</h2>
                        
                    ))
                }
            </div>
            


        </section>
    )
}