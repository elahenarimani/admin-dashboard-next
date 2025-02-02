"use client";
import { createContext, useContext, useState } from "react";
interface IcompEmail {
  to: string;
  subject: string;
  content: string;
  id: number;
}
interface IThemeContext {
  compEmail: IcompEmail[];
  setCompEmail: React.Dispatch<React.SetStateAction<IcompEmail[]>>;
}
export const ThemeContext = createContext<{
  compEmail: IcompEmail[];
  setCompEmail: React.Dispatch<React.SetStateAction<IcompEmail[]>>;
} | null>(null);

export default function ThemeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [compEmail, setCompEmail] = useState<IcompEmail[]>([]);

  return (
    <ThemeContext.Provider value={{ compEmail, setCompEmail }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { compEmail: [], setCompEmail: () => {} };
  }
  return context;
};
