import './globals.css'
import { Cinzel } from 'next/font/google'

const inter = Cinzel({ subsets: ['latin'] })

export const metadata = {
  title: 'A Song of Ice and Fire',
  description: 'House and Sworn Members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
