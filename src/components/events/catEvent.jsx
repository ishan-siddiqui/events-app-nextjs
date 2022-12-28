import Link from 'next/link'
import Image from 'next/image'

export function CatEvent({data, pageName}) {
    return(
            <div className='cat_events'>
                <h1> Events in {pageName} </h1>

                {
                    data.map
                    (
                        (ev) => (
                            <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                                <h3>{ev.title}</h3>
                                <Image alt={ev.title} height={300} width={300} src={ev.image} />
                            </Link>
                        )
                    )
                }
            </div>
    )
}