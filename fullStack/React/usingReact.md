# Using react

Only uninstall if create-react-app is installed.

```bash
npm uninstall -g create-react-app
npx create-react-app myfirstreactapp
```


## functional components
### useState
When we call the useState() function, it returns an array with two values:

```bash
The current state: The current value of this state.
The state setter: A function that we can use to update the value of this state.
```

```javaScript
// import the default export and the named export `useState` from the 'react' library
import React, {useState} from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState()

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}
```

## Style modules

To use CSS modules, we begin by naming our stylesheet in this format, where fileName should be replaced with the name of the component you’re styling:

```fileName.module.css```
 
This indicates that the file should be processed as a CSS module. Then, it must be imported into the file containing our component.

```import styles from './fileName.module.css'```
 
 From this import, we can see that the styles object now holds the class selectors of fileName.module.css. To access the selectors, we use the dot notation like so:

```<div className={styles.divStyle}></div>```

## Seperating containers and presentational components

If a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.

The functional part of a component (state, calculations, etc.) can be separated into a container component.

## Prop Types

```
import PropTypes from 'prop-types';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: PropTypes.string
};

// Or, for functional components:
const Example = (props) => {
  return <h1>{props.message}</h1>;
}
 
Example.propTypes = {
  message: PropTypes.string.isRequired
};
 
```

## React router

nb: version 6 has breaking changes.

```
npm install --save react-router-dom@5.2.0
// in js file 
import { BrowserRouter as Router } from ‘react-router-dom’
```