import fs from 'fs'
import chalk from 'chalk'
import { title } from 'process'
const getNotes = ()=> {return 'your notes here.........'}
const addNote = (title,body)=>{
    let notes = loadNotes()
    const duplicateNotes = notes.find((note)=>{
        return note.title === title
    })
    if(duplicateNotes === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('note taken!'))
    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = ()=>{
    try{
    const buffer  = fs.readFileSync('notes.json')
    const data = buffer.toString()
    return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })
    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}
const listNote = ()=>{
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log("Title: "+chalk.green.bold(note.title)+"  Body: "+chalk.green.bold(note.body))
    })
}
const readNote = (title)=>{
    const notes = loadNotes()
    const findnote = notes.find((note)=>{
        return note.title === title
    })
    if(findnote === undefined){
        console.log(chalk.red.inverse('Note not found!'))
    }else{
        console.log(chalk.green.inverse('Note found!'))
        console.log('Title: '+chalk.green.bold(findnote.title)+' Body: '+chalk.green.bold(findnote.body))
    }
}
export default {
    getNotes,
    addNote,
    removeNote,
    listNote,
    readNote
};