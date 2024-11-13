import Carousel from "@/components/Carousel"
import { IHeroData } from "@/interfaces/heroes"

interface IProps {
    params: {
        id: string
    }
}

const getHeroesData = async (): Promise< IHeroData[]> => {
    const response = await fetch(`${process.env.API_URL}/heroes`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error("Failed to request heroes list")
    }

    return response.json()
}

const Hero = async ({ params: { id } }: IProps) => {
    const heroes = await getHeroesData()
    return (
        <Carousel heroes={heroes} activeId={id}/>
    )
}

export default Hero
