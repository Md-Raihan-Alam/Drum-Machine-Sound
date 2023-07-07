import "./style.css";
import { useGlobalContext } from "../../context";
const Setting = () => {
  const { rangeValue, description, handleRangeChange, updateToggle } =
    useGlobalContext();
  return (
    <div className="setting">
      <div className="power">
        <div className="power_title">Power</div>
        <div className="power_switch" onClick={(e) => updateToggle(e, 1)}></div>
      </div>
      <div className="description">{description}</div>
      <div className="volume">
        <div className="volume_range">
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
      <div className="bank">
        <div className="bank_title">Bank</div>
        <div className="bank_switch" onClick={(e) => updateToggle(e, 2)}></div>
      </div>
    </div>
  );
};
export default Setting;
