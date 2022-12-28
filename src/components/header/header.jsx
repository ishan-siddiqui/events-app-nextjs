import Link from 'next/link'

export function HeaderComponent({data}) {
    return(
        <header>
        <nav className='topNav'>
          <img />
          <Link href='/'>Home</Link>
          <Link href='/about-us'>About Us</Link>
          <Link href='/events'>Events</Link>
        </nav>
      </header>
    )
}