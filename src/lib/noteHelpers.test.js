import {addNote, findById, toggleEditStatus, updateContent, updateNote, removeNote, filterNotes} from './noteHelpers'

test('addNote adds the passed note to the list', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false}
  ]
  const newNote = {id: 3, content: 'three', isEditting: false}
  const expected = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]

  const result = addNote(startNotes, newNote)

  expect(result).toEqual(expected)
})

test('addNote does not mutate existing note array', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false}
  ]
  const newNote = {id: 3, content: 'three', isEditting: false}
  const expected = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]

  const result = addNote(startNotes, newNote)

  expect(result).not.toBe(startNotes)
})

test('findById returns the expected item from an array', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]
  const expected = {id: 3, content: 'three', isEditting: false}
  const result = findById(3, startNotes)

  expect(result).toEqual(expected)
})

test('toggleEditStatus should toggle the isEditting prop of a note', () => {
  const startNote = {id: 3, content: 'three', isEditting: false}
  const expected = {id: 3, content: 'three', isEditting: true}
  const result = toggleEditStatus(startNote)
  expect(result).toEqual(expected)
})

test('toggleEditStatus does not mutate the original note', () => {
  const startNote = {id: 3, content: 'three', isEditting: false}
  const result = toggleEditStatus(startNote)
  expect(result).not.toBe(startNote)
})

test('updateContent updates note content', () => {
  const startNote = {id: 3, content: 'three', isEditting: false}
  const expected = {id: 3, content: 'new content', isEditting: false}

  const result = updateContent('new content', startNote)
  expect(result).toEqual(expected)
})

test('updateContent does not mutate the original note', () => {
  const startNote = {id: 3, content: 'three', isEditting: false}
  const result = updateContent('new content', startNote)
  expect(result).not.toBe(startNote)
})

test('updateNote updates an item by id', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]
  const updatedNote = {id: 3, content: 'three', isEditting: true}
  const expectedNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: true}
  ]

  const result = updateNote(startNotes, updatedNote)

  expect(result).toEqual(expectedNotes)
})

test('updateNote should not mutate the original array', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]
  const updatedNote = {id: 3, content: 'three', isEditting: true}
  const expected = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]

  const result = updateNote(startNotes, updatedNote)

  expect(result).not.toBe(startNotes)
})

test('removeNote removes an item by id', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]
  const targetId = 3
  const expectedNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false}
  ]
  const result = removeNote(startNotes, targetId)

  expect(result).toEqual(expectedNotes)
})

test('removeNote does not mutate the original array', () => {
  const startNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false},
    {id: 3, content: 'three', isEditting: false}
  ]
  const targetId = 3
  const expectedNotes = [
    {id: 1, content: 'one', isEditting: false},
    {id: 2, content: 'two', isEditting: false}
  ]
  const result = removeNote(startNotes, targetId)

  expect(result).not.toBe(startNotes)
})
