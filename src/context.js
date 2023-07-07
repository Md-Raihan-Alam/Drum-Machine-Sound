import keys from "./data";
import { createContext, useContext, useState, useEffect, useRef } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  //Settings.js
  const [rangeValue, setRangeValue] = useState(50);
  const [description, setDescription] = useState("");
  const [power, setPower] = useState(true);
  const [music, setMusic] = useState(true);
  const rangeValueRef = useRef(rangeValue);
  const powerOn = useRef(power);
  const BankMode = useRef(music);
  const handleRangeChange = (event) => {
    showDesc(`Volume: ${event.target.value}`);
    setRangeValue(event.target.value);
    console.log(rangeValue);
    rangeValueRef.current = event.target.value;
  };
  const showDesc = (text) => {
    setDescription(text);
    setTimeout(() => {
      setDescription("");
    }, 1000);
  };
  const updateToggle = (e, val) => {
    e.target.classList.toggle("active");
    if (val === 1) {
      if (power) showDesc("OFF");
      else showDesc("ON");
      setPower(!power);
      powerOn.current = !power;
    } else {
      if (music) showDesc("Smooth Piano Kit");
      else showDesc("Heater Kit");
      setMusic(!music);
      BankMode.current = !music;
    }
  };
  //Keys.js
  const playSound = (keySelect) => {
    const keyObj = keys.find((keyObj) => keyObj.keyWord === keySelect);
    if (keyObj) {
      if (BankMode.current) {
        showDesc(keyObj.show);
        const audio = new Audio(keyObj.sound);
        audio.volume = rangeValueRef.current / 100;
        audio.play();
      } else {
        showDesc(keyObj.show2);
        const audio = new Audio(keyObj.sound2);
        audio.volume = rangeValueRef.current / 100;
        audio.play();
      }
    }
  };
  const checkingKeyDown = (pressedKey) => {
    const targetedButton = document.querySelector(`[data-key="${pressedKey}"]`);
    if (targetedButton) {
      if (powerOn.current) playSound(pressedKey);
      targetedButton.style.backgroundColor = "orange";
      targetedButton.style.transform = "scale(0.95)";
      setTimeout(() => {
        targetedButton.style.backgroundColor = "";
        targetedButton.style.transform = "";
      }, 100);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const pressedKey = event.key.toUpperCase();
      checkingKeyDown(pressedKey);
    });
    return () => {
      window.removeEventListener("keydown", checkingKeyDown);
    };
  }, []);
  const handleKey = (event) => {
    checkingKeyDown(event.target.dataset.key);
  };
  return (
    <GlobalContext.Provider
      value={{
        rangeValue,
        handleRangeChange,
        updateToggle,
        description,
        keys,
        checkingKeyDown,
        handleKey,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
