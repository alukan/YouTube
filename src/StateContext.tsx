import React, { createContext, useContext, ReactNode, useState } from 'react';

interface StateStringArrayProps {
    state: string[];
    setState: React.Dispatch<React.SetStateAction<string[]>>;
}

interface StateStringProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

interface StateBooleanProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}



const StateNamesContext = createContext<StateStringArrayProps | undefined>(undefined);
const StateUserContext = createContext<StateStringProps | undefined>(undefined);
const OnLoginStateContext = createContext<StateBooleanProps | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
    const [names, setNames] = useState<string[]>([]);
    const [user, setUser] = useState<string>('');
    const [onLogin, setOnLogin] = useState(false)

    return (
        <StateNamesContext.Provider value={{ state: names, setState: setNames }}>
            <StateUserContext.Provider value={{ state: user, setState: setUser }}>
                <OnLoginStateContext.Provider value={{ state: onLogin, setState: setOnLogin }}>
                    {children}
                </OnLoginStateContext.Provider>
            </StateUserContext.Provider>
        </StateNamesContext.Provider>
    );
}

export function useNamesContext() {
    const context = useContext(StateNamesContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}

export function useUserContext() {
    const context = useContext(StateUserContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}

export function useOnLoginContext() {
    const context = useContext(OnLoginStateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
}
