import React, { useState } from "react";

export default function AssistivePage(props) {

    const [activeState, setActiveState] = useState(false);

    const [activeState1, setActiveState1] = useState(false);

    return (<>

        <h2>Assistive service made for hearing aids</h2>



        <input type="button" onClick={() => { setActiveState(!activeState); }} value="sample"
            className={activeState ? "btn btn-lg btn-primary rounded-pill py-3 w-100" : ""} />
    </>);
}