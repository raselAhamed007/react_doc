export default function Text({addEmoji}){
    let text = 'I am javascript programming language';

    if(addEmoji){
        text = addEmoji(text, '💜');
    }

    return <div>{text}</div>;
}