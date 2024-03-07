import React, { createContext, useContext, ReactNode, useState } from 'react';
import { VideoFromSearch } from './types/PreviewTypes';

interface StateVideoFromSearchArrayProps {
    state: VideoFromSearch[];
    setState: React.Dispatch<React.SetStateAction<VideoFromSearch[]>>;
}

interface StateStringProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

interface StateBooleanProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}



const StateOnGoingVideosContext = createContext<StateVideoFromSearchArrayProps | undefined>(undefined);
const StateUserContext = createContext<StateStringProps | undefined>(undefined);
const OnLoginStateContext = createContext<StateBooleanProps | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
    const [onGoing, setOnGoing] = useState<VideoFromSearch[]>([]);
    const [user, setUser] = useState<string>('');
    const [onLogin, setOnLogin] = useState(false)

    return (
        <StateOnGoingVideosContext.Provider value={{ state: onGoing, setState: setOnGoing }}>
            <StateUserContext.Provider value={{ state: user, setState: setUser }}>
                <OnLoginStateContext.Provider value={{ state: onLogin, setState: setOnLogin }}>
                    {children}
                </OnLoginStateContext.Provider>
            </StateUserContext.Provider>
        </StateOnGoingVideosContext.Provider>
    );
}

export function useOnGoingContext() {
    const context = useContext(StateOnGoingVideosContext);
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
