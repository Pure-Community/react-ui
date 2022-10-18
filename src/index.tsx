import { Button, Input } from './components';
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
    <div className='app__block'>
      <h2>Inputs</h2>
      <Input label='label' />
      <Input label='label' errorMessage='error' />
    </div>
  </React.StrictMode>
);