function Example(props) {
  return <h1>{props.text}</h1>
}
 
Example.defaultProps = {
  text: 'This is default text',
};

// OR
function Example({text='This is default text'}) {
  return <h1>{text}</h1>
}

// OR
function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}