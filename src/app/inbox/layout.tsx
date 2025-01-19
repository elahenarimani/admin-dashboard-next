import LeftSide from "../../components/inbox/leftSide/LeftSide";
interface Iprops {
  children: React.ReactNode;
}
export default function InboxLayout({ children }: Iprops) {
  return (
    <div>
      {/* <LeftSide /> */}
      <main> {children}</main>
    </div>
  )
}
