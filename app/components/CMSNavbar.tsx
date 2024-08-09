import Link from "next/link"
import { Lilita_One } from "next/font/google" 
import { BackIcon } from './Icons';

const font = Lilita_One({weight:"400",subsets :["latin"]})
const CMSNavbar = () => {
    return (
    <div className='flex justify-between items-center py-1 px5'>
      <Link href="/">
      <BackIcon/>
      </Link>
   <Link href="/">
   <div className={'${font.className} text-3xl dark:text-amber-50'}>

   </div>
    </Link>   
    </div>
  )
}

export default CMSNavbar