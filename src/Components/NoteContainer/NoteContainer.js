import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = []
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i])
    }
    return array;
  }

  const notes = reverArray(props.notes);
  console.log(props.notes, notes)
  return (
    <div className='note-container'>
      <h1>Notes</h1>
      <div className='note-container_notes custom-scroll'>
        {
          notes?.length>0?notes.map((item) => (<Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />)) : <h1>No notes present. Click on + button to add your notes.</h1>
        }

      </div>
    </div>
  )
}

export default NoteContainer