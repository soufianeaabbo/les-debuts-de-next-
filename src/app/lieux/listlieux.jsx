import LieuService from "@/services/lieu.services"

export default async function ListLieux() {
    const lieux = await LieuService.getAll()

    return (
            lieux.map((e) => (
                <a href={`/lieux/detail/${e.id}`}> {e.name} </a>
            ))
    )
}