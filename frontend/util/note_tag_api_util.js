export const fetchNoteTags = () => (
    $.ajax({
        method: 'GET',
        url: '/api/note_tags'
    })
)

export const fetchNoteTag = note_tagId => (
    $.ajax({
        method: 'GET',
        url: `/api/note_tags/${note_tagId}`
    })
)

export const createNotetag = note_tag => (
    $.ajax({
        method: 'POST',
        url: '/api/note_tags',
        data: { note_tag }
    })
)

export const updateNoteTag = note_tag => (
    $.ajax({
        method: 'PATCH',
        url: `/api/note_tags/${note_tag.id}`,
        data: { note_tag }
    })
)

export const deleteNoteTag = note_tagId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/note_tags/${note_tagId}`
    })
)