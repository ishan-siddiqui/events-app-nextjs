import Link from 'next/link'

export function FooterComponent({data}) {
    return(
        <footer>
        {' '}
        <p> &copy; Copyright 2022 - A project by <Link href='https://github.com/ishan-siddiqui' target='blank'>Ishan Siddiqui</Link></p>
      </footer>
    )
}
