"use client";
import { createContext, useContext, useState } from "react";
interface Iinbox {
  to: string;
  subject: string;
  content: string;
  id: number;
}
// interface IThemeContext {
//   inbox: Iinbox[];
//   setInbox: React.Dispatch<React.SetStateAction<Iinbox[]>>;
// }
export const InboxContext = createContext<{
  inbox: Iinbox[];
  setInbox: React.Dispatch<React.SetStateAction<Iinbox[]>>;
} | null>(null);

export default function InboxContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [inbox, setInbox] = useState<Iinbox[]>([]);

  return (
    <InboxContext.Provider value={{ inbox, setInbox }}>
      {children}
    </InboxContext.Provider>
  );
}
export const useInboxContext = () => {
  const context = useContext(InboxContext);
  if (!context) {
    return { inbox: [], setInbox: () => {} };
  }
  return context;
};