import HeroesList from "@/components/HeroesList"
import { IHeroData } from "@/interfaces/heroes"
import styles from "./page.module.scss"

const getHeroesData = async (): Promise <IHeroData[]> => {
  const response = await fetch(`${process.env.API_URL}/heroes`, {
    method: "GET"
  })

  if (!response.ok) {
    throw new Error("Failed to request herores list")
  }

  return response.json()
}

const Home = async () => {
  const heroes = await getHeroesData ()

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes}/>
    </main>
  )
}

export default Home