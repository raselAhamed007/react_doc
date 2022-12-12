import React from 'react';

const scaleNames = {
    c: 'Celsious',
    f: 'Fahrenheit',
};

export default function TempInput({scale, temparature, onTemparatureChange}) {
    return (
        <fieldset>
            <legend>Enter Temparature in {scaleNames[scale]}</legend>
            <input type="text" value={temparature} onChange={(e) => onTemparatureChange(e,scale)} />
        </fieldset>
    );
}
