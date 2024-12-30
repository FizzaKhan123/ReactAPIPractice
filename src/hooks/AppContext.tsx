import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your context
export interface AppContextType {
  work: string;
  setWork: React.Dispatch<React.SetStateAction<string>>;
  wage: string;
  setWage: React.Dispatch<React.SetStateAction<string>>;
}

// Create a default value that matches the shape of AppContextType
const defaultContextValue: AppContextType = {
  work: '',
  setWork: () => {},
  wage: '',
  setWage: () => {},
};

// Create the context with the default value
export const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [work, setWork] = useState<string>("");
  const [wage, setWage] = useState<string>("");

  return (
    <AppContext.Provider value={{ work, setWork, wage, setWage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

