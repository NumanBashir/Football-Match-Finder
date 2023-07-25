import ListViewItem from "./ListViewItem";

function ListView() {
  return (
    <>
      <div className="container-match">
        <h1>Matches nearby:</h1>
        <div className="list-view-item">
          <ListViewItem />
        </div>
      </div>
    </>
  );
}

export default ListView;
