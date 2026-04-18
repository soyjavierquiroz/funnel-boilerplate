/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { fetchVisitorData } from './fetchVisitorData';
import type { VisitorData } from './types';

interface VisitorContextValue {
  visitorData: VisitorData | null;
  isLoading: boolean;
}

const VisitorContext = createContext<VisitorContextValue | undefined>(undefined);

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadVisitorData = async () => {
      if (typeof window === 'undefined') {
        if (isMounted) setIsLoading(false);
        return;
      }

      try {
        const nextVisitorData = await fetchVisitorData();

        if (isMounted) {
          setVisitorData(nextVisitorData);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadVisitorData();

    return () => {
      isMounted = false;
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      visitorData,
      isLoading,
    }),
    [isLoading, visitorData],
  );

  return <VisitorContext.Provider value={contextValue}>{children}</VisitorContext.Provider>;
}

export function useVisitor() {
  const context = useContext(VisitorContext);

  if (!context) {
    throw new Error('useVisitor must be used inside a VisitorProvider');
  }

  return context;
}
