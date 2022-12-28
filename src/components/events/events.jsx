import Link from 'next/link'
import Image from 'next/image'

export function AllEvents({data}) {
    return(
        <div className='events_page'>
          <h1> Events Page</h1>
          {
            data.map(
              (ev) => (
                <Link className='content' key={ev.id} href={`/events/${ev.id}`}>
                  <h2>{ev.title}</h2>
                  <Image width={300} height={300} alt={ev.title} src={ev.image} />
                </Link>
              )
            )
          }
      </div>
    )
}