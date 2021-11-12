import React from "react";

const Pizza = (props) => {
    const { entries } = props;

    return (
        <div className='Entires=wrapper'>
            <h2>{entries.itemName}</h2>
            <p>Age:{entries.age}</p>
        </div>
    )
}

export default Pizza;