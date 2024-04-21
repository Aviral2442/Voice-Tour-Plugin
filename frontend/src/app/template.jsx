import { VoiceProvider } from '@/context/VoiceContext';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Template = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center' />
            <VoiceProvider>
                {children}
            </VoiceProvider>
        </div>
    )
}

export default Template