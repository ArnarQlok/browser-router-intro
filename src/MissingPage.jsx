import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>Well, that's dissappointing</p>
      <Link to="/">Visit our home page</Link>
      {/* <br />
      <a href="/">Link with A tagg</a> */}
    </main>
  );
};

export default MissingPage;
