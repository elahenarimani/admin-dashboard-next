"use client";

import { createContext, useState } from "react";
interface IcompEmail {
    to: string;
    subject: string;
    content: string;
    id: number;
  }
  interface IThemeContext {
    compEmail: IcompEmail[];
    setCompEmail: React.Dispatch<React.SetStateAction<IcompEmail[]>>
  }
export const CompContext = createContext<null | {
    compEmail: IcompEmail[];
    setCompEmail: Function;
}>(null);

export default function CompProvider({
  children,
}: {
  children: React.ReactNode;
})
 {
  const [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
  return (
    <CompContext.Provider value={{ compEmail:[] , setCompEmail }}>
      {console.log({showmail:compEmail})}
     
      {children}
    </CompContext.Provider>
  );
}