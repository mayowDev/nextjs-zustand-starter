"use client"// Because we need to access theme from store
import { Inter } from 'next/font/google'
import {useThemeStore} from '@/store/useThemeStore';
const inter = Inter({ subsets: ['latin'] })

export default function LayoutWrapper({children}: {children: React.ReactNode}) {
    const {theme} = useThemeStore() 
    return (
        <body className={`${inter.className} ${theme}`}>{children}</body>
    )
  }