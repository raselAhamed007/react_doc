import React from 'react';

export default function TempInput({temparature}) {
    let x = '';
    if(temparature >= 100){
        x = 'Water would boil';
    }else{
        x = 'Water would not boil';
    }
    return (
       <div>{x}</div>
    );
}
