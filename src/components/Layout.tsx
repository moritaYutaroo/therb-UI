import React from 'react';
import { AppProvider } from 'src/AppContext';
import Stepper from './Stepper';

interface LayoutProps{
    children: React.ReactNode;
}
export default function Layout(props: LayoutProps):React.ReactElement {
    const { children }=props;
    
    return(
        <AppProvider>
            {children}
            <Stepper />
        </AppProvider>
        
    )
}