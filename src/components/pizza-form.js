import React from "react";

const Form = (props) => {
    const { change, submit } = props;
    const { entries, Toppings, Sauce } = props;

    const onChange = (e) => {
        const { entire, value, checked, type } = e.target
        const newVal = type === 'checkbox' ? checked : value;
        change(entire, newVal)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
    <form onSubmit={onSubmit}>
        <label>Build your Own Pizza
            <div className='Entires=wrapper'>
                <h2>{entries.itemName}</h2>
                <p>Age:{entries.age}</p>
            </div>
         </label>

            <div>
        <label>Choice of Size
            {/* <select value={values.size} name='size' onChange={onChange}>
                <option value=''>--Select a Size--
                </option>
            </select> */}
        </label>
            </div>

            <div>
        <label>Choice of Sauce
            <input
                type='checkbox'
                name='Sauce'
                checked={Sauce}
                onChange={onChange}
            />
        </label>
            </div>

            <div>
        <label>Add Toppings
            <input
                type='checkbox'
                name='Toppings'
                checked={Toppings}
                onChange={onChange}
            />
        </label>
            </div>

            <div>
        <label>Special instructions
            <input
               
            />
        </label>
        <input type='submit' value='Order Pizza!'/>
            </div>
    </form>
    )
}

export default Form;