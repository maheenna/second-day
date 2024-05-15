import Image from 'next/image'
import  logo  from '/public/icons/logo.svg'
import  icon  from '/public/icons/icon.svg'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='px-3 py-3 '>
            <div className='flex items-center justify-between'>
             <Link href={'/'}><Image src={logo} alt='logo' width={172} height={24} /></Link>
                <Image src={icon} alt='iconmenu' width={24} height={24}/>
            </div>

        </div>
    )
}

export default Header
