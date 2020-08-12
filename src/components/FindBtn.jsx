import React from 'react';

function FindBtn(props){
    return <button id="find-btn" onClick={props.listSongs}>Find songs</button>
}

export default FindBtn;