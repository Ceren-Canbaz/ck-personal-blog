import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import { Lilita_One } from 'next/font/google';

const font = Lilita_One({weight:"400",subsets :["latin"]})
const Navbar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href="/" >
        <div className={'${font.className} text-3xl dark:text-amber-50'}>
          <span></span>
            Dev Blog
        </div>
        </Link>
        <div>
            <ThemeSwitcher/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
