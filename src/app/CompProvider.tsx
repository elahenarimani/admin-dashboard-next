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
export const CompContext = createContext<null | IThemeContext>(null);

export default function CompProvider({
  children,
}: {
  children: React.ReactNode;
})
 {
  const [compEmail, setCompEmail] = useState<IcompEmail[]>(() => {
    // مقداردهی اولیه فقط در اولین رندر انجام شود
    return [];
  });
  return (
    <CompContext.Provider value={{ compEmail , setCompEmail }}>
      {children}
    </CompContext.Provider>
  );
}