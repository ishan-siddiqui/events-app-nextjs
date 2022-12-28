import Link from 'next/link'

export function HeaderComponent({data}) {
    return(
        <header>
          <div>
            <nav className='topNav'>
              <img src="/public/favicon.ico" alt="logo"/>
              <h3 className='title'>Just an Event Finder</h3>
              <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about-us'>About Us</Link></li>
                <li><Link href='/events'>Events</Link></li>
              </ul>
            </nav>
          </div>
      </header>
    )
}