# React Testing Library

install with 
```bash
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

use via

```js
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

it("Should have header text Passing Thoughts", () => {
  render(<App />);
  // Test App header text here
  const header = screen.getByText("Passing Thoughts")
  expect(header).toHaveTextContent("Passing Thoughts")
});

it('Header should not show Goodbye yet', () => {
  // Render App
  render(<App />);
  // Attempt to extract the header element
  const header = screen.queryByText('Goodbye!');
  // Assert null as we have not clicked the button
  expect(header).toBeNull();
});
```

## Async tests

```js
// Changes header text after interval of 500ms
const handleClick = () => {
  setTimeout(() => {
      setText('Goodbye!');
  }, 500);
};

it('should show text content as Goodbye', async () => {
  // Render App
  render(<App />);
  // Extract button node 
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);
  // Wait for the text 'Goodbye!' to appear
  const header = await screen.findByText('Goodbye!');
  // Assert header to exist in the DOM
  expect(header).toBeInTheDocument();
});


it('should remove header display', async () => {
  // Render Header
  render(<Header/>)
  // Extract button node 
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);

  // Wait for the element to be removed asynchronously
  await waitFor(() => {
    const header = screen.queryByText('Hey Everybody');
    expect(header).toBeNull()
  })
});
```