import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import notes from './notes.js'


const argv = yargs(process.argv.slice(2)).argv
yargs(hideBin(process.argv))
.command('add','adds a new note',(yargs)=>{
    yargs.options('title',{describe:'takes a title',demandOption:true,type:'string'})
    .options('body',{describe:'takes in body',demandOption:true,type:'string'})
},()=>{ notes.addNote(argv.title,argv.body) })
  


.command('remove','remove note',(yargs)=>{
    yargs.options('title',{describe:'takes a title',demandOption:true,type:'string'})
},()=>{ notes.removeNote(argv.title) })


.command('list','lists a note',()=>{
    notes.listNote()
})


.command('read','reads a note',(yargs)=>{
    yargs.options('title',{ describe: 'takes a title',demandOption: true,type:'string'})
},()=>{
    notes.readNote(argv.title)
}).parse();
