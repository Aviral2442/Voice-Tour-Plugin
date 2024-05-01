'use client';
import { AppProvider } from '@/context/AppContext';
import { VoiceProvider } from '@/context/VoiceContext';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Template = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center' />
           
                <AppProvider>
                    {children}
                </AppProvider>
        </div>
    )
}

export default Template