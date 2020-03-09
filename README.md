# Protolitos

Small vanilla and really dumb WebComponents just for fun or quick prototyping. **Not for production**.

## Features

- Dependency free.
- Only primitive types for attributes. 
- Automatic attribute reflection.
- Automatic property to attribute name conversion (camel to dash).
- `render()` function receives the instance as param (like props).
- Import styles from scss files.
- Less writing to set properties and its default values:
  ```js
  static properties = {
    foo: { type: Number, value: 2 }
  };
  ```

## Development

- `npm start`: launch the demo.