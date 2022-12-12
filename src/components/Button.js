import React from 'react';


class Button extends React.Component{

    shouldComponentUpdate(nextPropes){
        const {change:currentChange} = this.props;
        const {change:nextChange} = nextPropes;

        if(currentChange === nextChange){
            return false;
        }else{
            return true;
        }
    }

    render() {
        const {change, lang, abc} = this.props;
        console.log(abc);
        return (
            <button onClick={() => change(lang)}>Click Here</button>
        );
    }
}

export default Button;