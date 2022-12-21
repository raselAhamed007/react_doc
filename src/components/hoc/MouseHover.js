import counter from './Counter';

const hoverCount = (props) => {
    const {count, incrementCount} = props;

    return (
        <div>
            <h2 onMouseOver={incrementCount}>Mouse hover {count} times.</h2>
        </div>
    );
}

export default counter(hoverCount);