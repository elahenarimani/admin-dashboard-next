// "use client";
// import { createContext, useContext, useState } from "react";
// interface IcompEmail {
//   to: string;
//   subject: string;
//   content: string;
//   id: number;
// }
// interface IThemeContext {
//   compEmail: IcompEmail[];
//   setCompEmail: React.Dispatch<React.SetStateAction<IcompEmail[]>>;
// }
// export let ThemeContext = createContext<{
//   compEmail: IcompEmail[];
//   setCompEmail: React.Dispatch<React.SetStateAction<IcompEmail[]>>;
// } | null>(null);

// export default function ThemeContextProvider({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   let [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
//   return (
//     <ThemeContext.Provider value={{ compEmail, setCompEmail }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
// export let useThemeContext = () => {
//   let context = useContext(ThemeContext);
//   if (!context) {
//     return { compEmail: [], setCompEmail: () => {} };
//   }
//   return context;
// };


























// "use client";

// import { createContext, ReactNode, useState } from "react";
// //  [compEmail, setCompEmail] = useState<IcompEmail[]>([]);
// interface IcompEmail {
//   to: string;
//   subject: string;
//   content: string;
//   id: number;
// }

// // export const CompMailContext = createContext<null | {
// //   compEmail: IcompEmail[];
// //   setCompEmail: Function;
// // }>(null);
// export const CompMailContext = createContext<any>(null);
// export default function CompMailProvider({
//   children,
// }: {
//   children: React.ReactNode;
// } ,
// ) {
//   const [compEmail, setCompEmail] = useState<IcompEmail[]>([])
//   return (
//     <CompMailContext.Provider value={{ compEmail, setCompEmail }}>
//       {children}
//     </CompMailContext.Provider>
//   );
// }
