import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), lang: 'bn-bd' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    handleClick = (lang) => {
        this.setState({
            lang: lang,
        });
    };

    render() {
        const { date, lang } = this.state;
        //const { locale } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(lang)}</span>
                </h1>
                <Button change={this.handleClick} lang='en-us' abc='Iqra'>Click</Button>
            </div>
        );
    }
}

export default Clock;