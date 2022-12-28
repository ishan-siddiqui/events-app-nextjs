import path from 'path'
import fs from 'fs'

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData) 
    return data
}

export default function handler(req, res) {
    const{method} = req;

    //Access our data.json file
    //Extract the Data(all_events)
            //resp should be 404 if there are no all_events
        // all_events - Loop through them and identify the eventID
        // Add new email to emails_registered
            //only if that email doesn't already exist on emails_registered
            //check if format of email is okay
        

    const filePath = buildPath()
    const {events_categories,allEvents} = extractData(filePath)

    if (!allEvents) return res.status(404).json({message:`events data not found`})


    if (method ==="POST") {
        const {email, eventID} = req.body 

        const newAllEvents = allEvents.map((ev) => {
            if(ev.id === eventID){
                if (ev.emails_registered.includes(email)) {
                    res.status(201).json({message: 'This email has already been registered'})
                    return ev
                }

                return {
                    ...ev, emails_registered:[ ...ev.emails_registered,email]
                }

            }
            return ev;
        })
        
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents }))
        
        
        

        

        res.status(200).json({message:`You have been regestered successfuly with the email: ${email} ${eventID}`})
    }

}