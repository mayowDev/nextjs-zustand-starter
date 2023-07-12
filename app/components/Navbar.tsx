"use client"
import { useRouter } from 'next/navigation'
import NavStyles from '../styles/Nav.module.scss'

import ThemeToggle from './themeToggle'
import Button from './Button/Button'

const Navbar = () => {
  const route = useRouter()
  return (
    <nav className={NavStyles.nav}>
      <Button
        onClick={()=>route.push('/')}
        text='Home Page'
        className='button'
      />
  
      <ThemeToggle/>

    </nav>
  )
}

export default Navbar