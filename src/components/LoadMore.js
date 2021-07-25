import "./LoadMore.css";

export default function LoadMore({ onClick }) {
  return (
    <div className="app__load-more">
      <button className="app__load-more--button" onClick={onClick}>
        More
      </button>
    </div>
  );
}
