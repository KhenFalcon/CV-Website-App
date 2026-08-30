'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';

// list of possible context values
type Localization = 'English' | 'Japanese';

// expected capabilities of this context type:
type LocalizedContextType = {
    localization: Localization; // ...to have some stored context variable
    toggleLocalization: () => void; // ...to be able to manipulate said context variable
}

 // instantiate the context (should only be undefined here and nowhere else)
const LocalizationContext = createContext<LocalizedContextType | undefined>(undefined);

export function LocalizationProvider({ children }: { children: ReactNode }) {
    // define instance of the context
    const [localization, setLocalization] = useState<Localization>('English');
    const toggleLocalization = () => setLocalization(
        (prev) => (prev == 'English' ? 'Japanese' : 'English')
    );

    // return context as a parental component
    return (
        <LocalizationContext.Provider value={{ localization, toggleLocalization }}>
            {children}
        </LocalizationContext.Provider>
    );
}

export function useLocalization() {
    const context = useContext(LocalizationContext);
    if (!context)
        throw new Error('useLocalization must be used within a LocalizationProvider component');
    else
        return context; 
}