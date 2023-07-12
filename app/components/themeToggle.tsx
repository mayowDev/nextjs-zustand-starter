
import React from 'react';
import { useThemeStore} from '@/store/useThemeStore';


export default function ThemeToggle() {
  const {setTheme} = useThemeStore();
  return (
    
      <button className='button' onClick={() => {setTheme()}}>
        <span className="block">Switch theme</span>
      </button>
  )
}