import { createContext, useContext, useRef, type PropsWithChildren } from 'react';

interface SectionRefs {
  home: React.RefObject<HTMLElement>;
  'la-naturopathie': React.RefObject<HTMLElement>;
  parcours: React.RefObject<HTMLElement>;
  'reflexologie-plantaire': React.RefObject<HTMLElement>;
  massage: React.RefObject<HTMLElement>;
  tarifs: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
}

const SectionRefsContext = createContext<SectionRefs | null>(null);

export function SectionRefsProvider({ children }: PropsWithChildren) {
  const refs: SectionRefs = {
    home: useRef<HTMLElement>(null),
    'la-naturopathie': useRef<HTMLElement>(null),
    parcours: useRef<HTMLElement>(null),
    'reflexologie-plantaire': useRef<HTMLElement>(null),
    massage: useRef<HTMLElement>(null),
    tarifs: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  return (
    <SectionRefsContext.Provider value={refs}>
      {children}
    </SectionRefsContext.Provider>
  );
}

export function useSectionRefs() {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
} 