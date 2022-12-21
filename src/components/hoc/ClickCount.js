import counter from './Counter';

const clickCount = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button onClick={incrementCount}>Click {count} Times</button>
        </div>
    );
}

export default counter(clickCount);