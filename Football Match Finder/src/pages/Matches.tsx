import ListView from "../components/ListView";

function Matches() {
  return (
    <>
      <div className="container-match">
        <h1>Matches</h1>
        <h2>Here you can see each match located nearby</h2>
        <ListView />
      </div>
    </>
  );
}

export default Matches;
