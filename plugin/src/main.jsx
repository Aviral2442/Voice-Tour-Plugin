import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchPlugin from './SearchPlugin.jsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { VoiceProvider } from './VoiceContext.jsx';

// Search Plugin
const searchPlug = document.getElementsByTagName('search');
if (searchPlug.length > 0) {
  console.log(searchPlug[0].attributes);
  const ownerId = searchPlug[0].attributes.getNamedItem('owner-id').value;
  // const webpageId = searchPlug[0].attributes.getNamedItem('webpage-id').value;


  console.log(ownerId);
  ReactDOM.createRoot(searchPlug[0]).render(
    <MantineProvider>
      <VoiceProvider ownerId={ownerId}>
        <SearchPlugin ownerId={ownerId}>
          <div dangerouslySetInnerHTML={{ __html: searchPlug[0].innerHTML }} />
        </SearchPlugin>
      </VoiceProvider>
    </MantineProvider>
  )
}