interface LeftSideNavItemProps {
  handleClick: (text: string) => void;
}

function LeftSideNavItem({ handleClick }: LeftSideNavItemProps) {
  return (
    // Item side
    <>
      <div>
        <button className="nav-button" onClick={() => handleClick("Home")}>
          Home
        </button>
        <br />
        <button className="nav-button" onClick={() => handleClick("Matches")}>
          Matches
        </button>
        <br />
        <button className="nav-button" onClick={() => handleClick("Profile")}>
          Profile
        </button>
        <br />
        <button className="nav-button" onClick={() => handleClick("Settings")}>
          Settings
        </button>
        <br />
      </div>
    </>
  );
}

export default LeftSideNavItem;
