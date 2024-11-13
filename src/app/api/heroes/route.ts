import { NextResponse } from "next/server"

/*
    - O Next.js já relaciona que existe uma API juntamente com o seu URL por causa que existe um arquivo route.ts dentro do diretório 
    API/heroes; 
    - Route Handler -> Manipular rota usando o request e o response
*/

export const GET = async () => {
    const response = await fetch(`${process.env.API_URL}/heroes`)
    const data = await response.json()

    return NextResponse.json({ data })
}