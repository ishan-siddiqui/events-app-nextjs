import { AllEvents } from '../../src/components/events/events'

export default function Events({data}) {
    return <AllEvents data={data} />
    
  }

export async function getStaticProps() {
  const {events_categories} = await import('/data/data.json')

  return{
    props:{
      data: events_categories,
    }
  }
}