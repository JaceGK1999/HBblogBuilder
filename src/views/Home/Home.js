import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title }} />
      <Editor
        {...{
          title,
          setTitle,
        }}
      />
    </main>
  );
}
