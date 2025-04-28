import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type AsideType = 'search' | 'cart' | 'mobile' | 'closed' | 'preview' ;
type AsideContextValue = {
  type: AsideType;
  data? : any
  open: (mode: AsideType , data? : any) => void;
  close: () => void;
};

export function Aside({
  children,
  heading,
  type,
}: {
  children?: React.ReactNode;
  type: AsideType;
  heading: React.ReactNode;
}) {
  const { type: activeType, close } = useAside();
  const expanded = type === activeType;

  useEffect(() => {
    const abortController = new AbortController();

    if (expanded) {
      document.addEventListener(
        'keydown',
        function handler(event: KeyboardEvent) {
          if (event.key === 'Escape') {
            close();
          }
        },
        { signal: abortController.signal },
      );
    }
    return () => abortController.abort();
  }, [close, expanded]);

  if (!expanded) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-150 flex justify-end bg-black/40 pointer-events-none"
    >
    
<div className="relative  sm:w-full xl:w-[540px] 2xl:w-[540px]  bg-white shadow-lg flex flex-col pointer-events-auto">




  <main className="flex-1 overflow-y-auto p-4 flex flex-col">
    {children}
  </main>
</div>


<button
  className="absolute inset-0 w-20 h-full"
  onClick={close}
  aria-label="Close aside"
></button>
    </div>
  );
}

const AsideContext = createContext<AsideContextValue | null>(null);

Aside.Provider = function AsideProvider({ children }: { children: ReactNode }) {
  const [type, setType] = useState<AsideType>('closed');
  const [data, setData] = useState<any>(null);
  return (
    <AsideContext.Provider
      value={{
        type,
        data ,
        open: (newType, newData) => {
          setType(newType);
          setData(newData ?? null);
        },
        close: () => {
          setType('closed');
          setData(null); 
        },
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export function useAside() {
  const aside = useContext(AsideContext);
  if (!aside) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return aside;
}
