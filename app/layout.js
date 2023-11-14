import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import SocialsBar from './SocialsBar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stuyvesant Senior Caucus',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <SocialsBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
