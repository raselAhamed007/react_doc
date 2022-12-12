import React from 'react';
import { convert, toCelsious, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TempInput from './TempInput';


class Calculator extends React.Component {
    state = {temparature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temparature : e.target.value,
            scale
        });
    }
    
    render() {
        const {temparature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temparature, toCelsious) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature, toFahrenheit) : temparature;
        return (
            <div>
                <TempInput scale='c' temparature={celsius} onTemparatureChange={this.handleChange} />
                <TempInput scale='f' temparature={fahrenheit} onTemparatureChange={this.handleChange} />
                <BoilingVerdict temparature={temparature} />
            </div>

        );
    }
}

export default Calculator;