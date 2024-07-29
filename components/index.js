import React, { useState } from 'react';

export const RtToggle = ({ label, checked = false, onChange, help = '', name = '', id }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event) => {
        return new Promise((resolve, reject) => {
            try {
                const newCheckedState = event.target.checked;
                setIsChecked(newCheckedState);
                
                // Use a timeout to ensure state change has been applied before resolving the promise
                setTimeout(() => {
                    if (onChange) {
                        console.log(newCheckedState);
                        onChange(newCheckedState);
                    }
                    resolve(newCheckedState);
                }, 0);
            } catch (e) {
                reject(e);
            }
        });
    };

    return (
        <div className="rt-toggle">
            <input
                type="checkbox"
                defaultChecked={isChecked}
                id={id}
                name={name}
                onChange={handleChange}
            />
            <label className="rt-toggle--label" htmlFor={id}>
                {label}
            </label>
            <label className="rt-toggle--toggle" htmlFor={id}>
                <span>{help}</span>
            </label>
        </div>
    );
}