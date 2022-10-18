import { Button } from './components';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import { ButtonType, LabelType } from 'components/Button/Button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function ButtonsBlock() {
  const [title, settitle] = useState('button')
  const [labelType, setlabelType] = useState<LabelType>('uppercase')
  const [rounded, setrounded] = useState(false)
  const [short, setshort] = useState(false)
  const [type, settype] = useState<ButtonType>('filled')

  return (
    <div className='app__block'>
      <h2>Buttons</h2>
      <Button
        title={title}
        labelType={labelType}
        rounded={rounded}
        short={short}
        type={type}
      />
      <div className="app_controls">
        <div>
          <input value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
          <input value={labelType} type='radio' title='uppercase' onChange={() => setlabelType('uppercase')} />
          <input value={labelType} type='radio' title='capitalize' onChange={() => setlabelType('capitalize')} />
        </div>
        <div>
          <input type='checkbox' onChange={() => setrounded(!rounded)} />
        </div>
      </div>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <ButtonsBlock />
  </React.StrictMode>
);