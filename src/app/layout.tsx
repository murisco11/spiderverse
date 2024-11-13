import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss"
import Link from "next/link";

/*
   - O layout.tsx serve para ser o cabeçalho e a estrutura padrão de todas as páginas. O next.js é formado por várias páginas e APIs
   - O layout serve para todas as páginas e não ficar carregando novas informações sempre
*/

/*
  - Nessa parte do TSX, ou seja, nas páginas, o Next.js sabe que a maioria das vezes que você for utilizar o src, vai estar no public, então nao precisa colocar algum caminho, pois já vai estar na página
*/

export const metadata: Metadata = {
  title: "Spiderverse",
  description: "Criando um carrossel Parallax do Aranhaverso com React, Next.js e Framemotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image src="/icons/menu.svg" alt="Opções de menu" width={36} height={25} />
          <Link href="/">
            <Image src="/spider-logo.svg" alt="Spiderman" width={260} height={70} />
          </Link>
          <Image src="/icons/user.svg" alt="Login" width={36} height={25} />
        </header>
        {children}
      </body>
    </html>
  );
}
