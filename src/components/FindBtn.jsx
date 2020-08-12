import React from 'react';

function FindBtn(props){
    function handleOnClick(){
        props.listSongs();
        props.getSongs();
    }
    return <button id="find-btn" onClick={handleOnClick}>Find songs</button>
}


export default FindBtn;