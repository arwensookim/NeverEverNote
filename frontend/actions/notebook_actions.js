import * as NotebookAPIUtil from '../util/notebook_api_util';


export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS'; 
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOK_ERRORS = 'RECEIVE_NOTEBOOK_ERRORS';
export const REMOVE_NOTEBOOK_ERRORS = 'REMOVE_NOTEBOOK_ERRORS'; 


const receiveNotebooks = (notebooks) => ({
    type: RECEIVE_NOTEBOOKS, 
    notebooks
})

const receiveNotebook = (notebook, notes = {}) => ({
    type: RECEIVE_NOTEBOOK,
    notebook,
    notes
});


const removeNotebook = (notebookId) => ({
    type: REMOVE_NOTEBOOK,
    notebookId
});

const receiveNotebookErros = errors => ({
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
})

const removeNotebookErrors = () => ({
    type: REMOVE_NOTEBOOK_ERRORS,
})

// thunk action creater


export const fetchNotebooks = () => dispatch => (
    NotebookAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = (notebookId) => dispatch => (
    NotebookAPIUtil.fetchNotebook(notebookId)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)))
);


export const createNotebook = (notebook) => dispatch =>  {
    return NotebookAPIUtil.createNotebook(notebook)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)))
}

export const updateNotebook = (notebook) => dispatch => {
    return NotebookAPIUtil.updateNotebook(notebook)
    .then(({ notebook, notes }) => dispatch(receiveNotebook(notebook, notes)))
}

export const deleteNotebook = (notebookId) => dispatch => (
    NotebookAPIUtil.deleteNotebook(notebookId)
    .then(() => dispatch(removeNotebook(notebookId)))
)
