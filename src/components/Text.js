import React from 'react';

class Text extends React.Component {

    state = { data: this.changeText(this.props.loc) };

    changeText(p){
        if(p === "bn"){
            return "Hello Bangla";
        }else if(p === "en"){
            return "Hello English";
        }

        return null;
    }

    render() {
        const { data } = this.state;
        const { loc } = this.props;
        return (
            <h1 className="data">
                <span className="text">{data}</span><br/>
                <span className="text">{loc}</span>
            </h1>
        );
    }
}

export default Text;
