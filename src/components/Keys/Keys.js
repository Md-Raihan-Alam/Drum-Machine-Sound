import { useGlobalContext } from "../../context";
import "./style.css";
const Keys = () => {
  const { keys, handleKey } = useGlobalContext();
  return (
    <div className="keys">
      {keys.map((key) => {
        return (
          <button
            key={key.keyWord}
            data-key={key.keyWord}
            className="key"
            onClick={(e) => handleKey(e)}
          >
            {key.keyWord}
          </button>
        );
      })}
    </div>
  );
};

export default Keys;
