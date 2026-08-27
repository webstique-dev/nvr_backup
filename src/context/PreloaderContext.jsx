import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext({
  isPreloading: true,
  setIsPreloading: () => {},
});

export const PreloaderProvider = ({ children }) => {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ isPreloading, setIsPreloading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
