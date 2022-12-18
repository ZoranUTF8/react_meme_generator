import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="loading--spinner-container">
      <Spinner animation="border" role="status" className="loading--spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
