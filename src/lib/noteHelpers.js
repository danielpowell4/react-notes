export const addNote = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*1000000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleEditStatus = (note) => ({...note, isEditting: !note.isEditting})

export const updateContent = (newContent, note) => ({...note, content: newContent})

export const updateNote = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

export const removeNote = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}
