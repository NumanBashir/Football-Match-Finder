import LeftSideNavItem from "./LeftSideNavItem";

interface LeftSideNavProps {
  handleClick: (text: string) => void;
}

function LeftSideNav({ handleClick }: LeftSideNavProps) {
  return (
    <>
      <div className="outerBox">
        <LeftSideNavItem handleClick={handleClick} />
      </div>
    </>
  );
}

export default LeftSideNav;
