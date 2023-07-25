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
          <div className="iconListViewitem"></div>
          <div className="buttonListViewItem"></div>
        </div>
      </div>
    </>
  );
}

export default ListViewItem;
