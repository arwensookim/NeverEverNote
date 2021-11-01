import React from "react";
import { Route, Switch } from "react-router-dom";


import NotesIndexContainer from "../notes/notes_index_container";
import NoteShowContainer from "../notes/note_show_container";
import mainNavContainer from "./main_nav/main_nav_container";
import NotebookIndexContainer from "../notebooks/notebooks_index_container";
import NotebookShowContainer from "../notebooks/notebook_show_container";
import TagsIndexContainer from "../tags/tags_index_container";
import TagShowContainer from "../tags/tag_show_container";


const Main = () => {
    return (
        <div className="main-page">
            <Switch>
                <Route path="/notebooks/:notebookId" component={mainNavContainer}/>
                <Route path="/tags/:tagId" component={mainNavContainer} />
                <Route component={mainNavContainer}/>
            </Switch>
            {/* <Route path="/notes" component={mainNavContainer}/> */}
            <Route exact path="/notebooks" component={NotebookIndexContainer} />
            <Route path="/notebooks/:notebookId" component={NotebookShowContainer}/>
            <Route path="/notebooks/:notebookId/notes/:noteId" component={NoteShowContainer}/>
            <Route path="/notes" component={NotesIndexContainer}/>
            <Route path="/notes/:noteId" component={NoteShowContainer} />
            <Route exact path="/tags" component={TagsIndexContainer} />
            <Route path="/tags/:tagId" component={TagShowContainer} />
            <Route path="/tags/:tagId/:noteId" component={NoteShowContainer} />
        </div>
    )
}

export default Main;