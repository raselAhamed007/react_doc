import Calculator from './components/Calculator';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Form from './components/Form';
import ClickCount from './components/hoc/ClickCount';
import HoverCount from './components/hoc/MouseHover';

function App() {
  return (
    <div>
      {/* <Clock locale='bn-BD' /> */}
      {/* <Text loc='bn' /> */}
      <Form />
      <br/>
      <Calculator />
      <br/>
      <br/>
      <Text />
      <br/>
      <br/>
      <Emoji>
        {
          ({addEmoji}) => <Text addEmoji={addEmoji}/>
        }
      </Emoji>
      <br/>
      <br/>
      <ClickCount />
      <br/>
      <br/>
      <HoverCount />
      <br/>
      <br/>
    </div>
  );
}

export default App;
