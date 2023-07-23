import { Link } from "react-router-dom";

function LeftSideNavItem() {
  return (
    // Item side
    <>
      <div>
        <Link to="/home">
          <button className="nav-button">Home</button>
        </Link>
        <br />
        <Link to="/matches">
          <button className="nav-button">Matches</button>
        </Link>
        <br />
        <Link to="/profile">
          <button className="nav-button">Profile</button>
        </Link>
        <br />
        <Link to="/settings">
          <button className="nav-button">Settings</button>
        </Link>
        <br />
      </div>
    </>
  );
}

export default LeftSideNavItem;
