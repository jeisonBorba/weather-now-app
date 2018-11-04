import React from 'react';

const FormErrors = ({ formErrors }) => {
    return (
        <div>
            {Object.keys(formErrors).map((fieldName, i) => {
                return (formErrors[fieldName].length)
                    ? ( <p key={i}>{fieldName} {formErrors[fieldName]}</p> ) : '';
            })}
        </div>
    )
}

export default FormErrors;