import { Button, H1, H2, H3, H4, H5, H6 } from './components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className='app__block'>
      <h2>Buttons</h2>
      <Button title='button' />
      <Button title='button' type='outlined' />
      <Button title='button' type='outlined' rounded />
      <Button title='button' type='text' rounded />
      <Button title='button' type='outlined' rounded labelType='capitalize' />
      <Button title='button' type='outlined' rounded labelType='capitalize' short />
    </div>
    <div className="app__block">
      <H1>heading 1</H1>
      <H2>heading 2</H2>
      <H3>heading 3</H3>
      <H4>heading 4</H4>
      <H5>heading 5</H5>
      <H6>heading 6</H6>
    </div>
  </React.StrictMode>
);