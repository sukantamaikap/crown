import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, lable, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChang= {handleChange} {...otherProps} />
        {
            lable ? 
            <lable className={`${otherProps.value.lenght} ? 'shrink' : ''} form-input-label`}> 
                {lable}
            </lable>
            : null
        }
    </div>
)

export default FormInput;