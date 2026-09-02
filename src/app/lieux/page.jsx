
import { Suspense } from 'react';
import ListLieux from './listlieux';
import FleurLoadingPage from './loading';


export default async function locationPage(){

    

    return (
        <section>


            <h1>la page des lieux</h1>



            <div className="flex flex-col gap-2">
                <Suspense fallback={<FleurLoadingPage/> }>
                {/* suspense attend toujours un composant */}
                    <ListLieux/>
                </Suspense>
            </div>
            


        </section>
    )
}