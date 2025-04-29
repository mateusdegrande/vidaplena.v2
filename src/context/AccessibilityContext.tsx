import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AccessibilitySettings } from '../types';

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  contrast: 'normal',
  darkMode: false,
  highContrast: false,
};

const AccessibilityContext = createContext<AccessibilityContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
});

export const useAccessibility = () => useContext(AccessibilityContext);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    
    // Aplicar modo escuro
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Aplicar alto contraste
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Aplicar tamanho da fonte
    document.documentElement.style.fontSize = 
      settings.fontSize === 'normal' ? '16px' :
      settings.fontSize === 'grande' ? '20px' : '24px';
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const increaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: prev.fontSize === 'normal' ? 'grande' : 
                prev.fontSize === 'grande' ? 'extra-grande' : 'extra-grande'
    }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: prev.fontSize === 'extra-grande' ? 'grande' : 
                prev.fontSize === 'grande' ? 'normal' : 'normal'
    }));
  };

  return (
    <AccessibilityContext.Provider value={{ 
      settings, 
      updateSettings,
      increaseFontSize,
      decreaseFontSize
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}