import Navbar from './components/Navbar'
import LayoutWrapper from './lib/LayoutWrapper'
import './globals.css'

export const metadata = {
  title: 'Next / Typescript / Zustand',
  description: 'This next.JS app displays jokes ',
}

export default function RootLayout({children,}: {children: React.ReactNode}) { 
  return (
    <html lang="en">
      <LayoutWrapper>
        <Navbar/>
        {children}
      </LayoutWrapper>
    </html>
  )
}
