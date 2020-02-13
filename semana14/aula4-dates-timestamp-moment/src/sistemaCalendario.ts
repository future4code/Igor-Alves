import { readFile, writeFile } from 'fs'
import * as moment from 'moment'
moment.locale('pt-br')

const filePath: string = '../calendar.json'

type event = {
    name: string,
    description: string,
    initialDate: moment.Moment,
    finishDate: moment.Moment,
}

type eventsFile = {
    events: event[]
}


const newEvent: event = {
    name: process.argv[2],
    description: process.argv[3],
    initialDate:  moment(process.argv[4], 'DD/MM/YYYY HH:mm'),
    finishDate: moment(process.argv[5], 'DD/MM/YYYY HH:mm'),
}


const getEvents = async () => {
    const readEventsPromise: Promise<string> =  new Promise((resolve, reject) => {
        readFile(filePath, (err: Error, data: Buffer) => {
            if(err){
                reject(err)
                return
            }
            resolve(data.toString())
        })
    })

    const jsonContent: string = await readEventsPromise
    const eventsObject: eventsFile = JSON.parse(jsonContent)
    return eventsObject
}


const createEvent = async () => {
    const file = await getEvents()

    const createEventPromise: Promise<void> = new Promise((resolve, reject) => {
        file.events.push(newEvent);
        const dataEvents = JSON.stringify(file);

        writeFile(filePath, dataEvents, 'utf8', (err) => {
            if(err){
                reject(err)
                return
            }
            resolve(console.log("Evento agendado com sucesso!"))
            return
        })
    })
}




createEvent().then((eventsObject: void) => {
    console.log("Agendando....")
})

