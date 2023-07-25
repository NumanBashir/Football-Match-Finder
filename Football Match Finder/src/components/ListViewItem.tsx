function ListViewItem() {
  return (
    <>
      <div className="matchContainer">
        <div className="leftSideListViewItem">
          <h3>Time: </h3>
          <h3>Address: </h3>
          <h3>Player / Players</h3>
        </div>

        <div className="rightSideListViewItem">
          <div className="iconListViewitem">
            <img
              className="footballImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png"
            />
          </div>
          <div className="buttonListViewItem">
            <button>Join</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListViewItem;
