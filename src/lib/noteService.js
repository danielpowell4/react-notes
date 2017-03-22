const baseUrl = 'http://localhost:8080/notes'

export const loadNotes = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createNote = (note) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }).then(res => res.json())
}

export const saveNote = (note) => {
  return fetch(`${baseUrl}/${note.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }).then(res => res.json())
}

export const destroyNote = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
