"use client" /* Faz com que o Framer Motion seja renderizada na parte do cliente, e não do servidor */

import { spidermanFont } from "@/fonts"
import { IHeroData } from "@/interfaces/heroes"
import styles from "./heroesList.module.scss"
import HeroPicture from "../HeroPicture"
import { motion } from "framer-motion"
import Link from "next/link"

interface IProps {
    heroes: IHeroData[]
}

const HeroesList = ({ heroes }: IProps) => {
    console.log(heroes)
    return (
        <>
            <motion.h1 className={`${spidermanFont.className} ${styles.title}`}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 2,
                    delay: 0.5
                }}>
                - SPIDERS -
            </motion.h1>
            <motion.section className={styles.heroes}
                initial={{
                    opacity: 0,
                    y: -100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 2
                }}>
                {heroes.map(hero => {
                    return <motion.div key={hero.id} className={styles.imageContainer}
                        whileHover={{
                            scale: 1.3
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        transition={{
                            duration: 0.7
                        }}>
                        <Link href={`/hero/${hero.id}`}>
                            <HeroPicture hero={hero} />
                        </Link>
                    </motion.div>
                })}
            </motion.section>
        </>
    )
}

export default HeroesList