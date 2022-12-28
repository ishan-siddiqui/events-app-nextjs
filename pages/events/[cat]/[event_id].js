import Image from 'next/image'
import { SingleEvent } from '../../../src/components/events/singleEvent';

export default function Event({ data }) {
    console.log(data);
    return (
        <SingleEvent data={data}/>
    )
    }

export async function getStaticPaths(){
    const {allEvents} = await import('/data/data.json');

    const allPaths = allEvents.map((path) => {

        return {
            params: {
                event_id: path.id,
                cat: path.city,
            }
        }
    })

    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.event_id;
    const {allEvents} = await import('/data/data.json')
    const eventData = allEvents.find((ev) => id === ev.id);

    return {
        props: {
            data: eventData,
        }
    }
}