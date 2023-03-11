const { addNoteHandler,getAllNotesHandler,getNotebyIdHandler,editNoteHandler,deleteNoteById} = require('./handler')

const routes = [
    {
        method:'POST',
        path:'/notes',
        handler:addNoteHandler
    },
    {
        method:'GET',
        path:'/notes',
        handler:getAllNotesHandler
    },
    {
        method:'GET',
        path:'/notes/{id}',
        handler: getNotebyIdHandler
    },
    {
        method:'PUT',
        path:'/notes/{id}',
        handler: editNoteHandler
    },
    {
        method:'DELETE',
        path:'/notes/{id}',
        handler: deleteNoteById
    }
]

module.exports=routes;