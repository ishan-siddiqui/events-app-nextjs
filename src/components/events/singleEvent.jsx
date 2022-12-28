import { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export function SingleEvent({data}) {
    const inputEmail = useRef();
    const router = useRouter()
    console.log(router)

    async function onSubmit(e) {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventID = router.query.event_id

        try {
            //POST fetch request
            // body emailValue and the emailID
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailValue, eventID})
            })

            if(!(response.ok)) throw new Error(`Error: ${response.status}`)
            const data = await response.json()
            console.log('POST',data)

    

        } catch (error) {
            console.log('ERROR',error)
        }

    }
    return(
        <div className='event_single_page'>
            <h1> {data.title} </h1>
            <Image src={data.image} alt={data.title}  width={1000} height={500} />
            <p> {data.description} </p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>Get Registered for this Event Now!!</label>
                <input 
                  ref={ inputEmail }
                  type="email" 
                  id='email' 
                  placeholder='insert email here'
                />
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}