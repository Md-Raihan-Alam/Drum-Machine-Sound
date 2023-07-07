import Heater1 from "./assets/Heater-1.mp3";
import Kick2 from "./assets/RP4_KICK_1.mp3";
import Open from "./assets/Dsc_Oh.mp3";
import Heater2 from "./assets/Heater-2.mp3";
import Heater3 from "./assets/Heater-3.mp3";
import Clap from "./assets/Heater-6.mp3";
import Heater4 from "./assets/Heater-4_1.mp3";
import Kick from "./assets/Kick_n_Hat.mp3";
import Closed from "./assets/Cev_H2.mp3";
import Chord1 from "./assets/Chord_1.mp3";
import Chord2 from "./assets/Chord_2.mp3";
import Chord3 from "./assets/Chord_3.mp3";
import Shaker from "./assets/Give_us_a_light.mp3";
import OpenHH from "./assets/Dry_Ohh.mp3";
import ClosedHH from "./assets/Bld_H1.mp3";
import PunchKick from "./assets/punchy_kick_1.mp3";
import SideKick from "./assets/side_stick_1.mp3";
import Snare from "./assets/Brk_Snr.mp3";
const keys = [
  {
    keyWord: "Q",
    sound: Heater1,
    sound2: Chord1,
    show: "Heater 1",
    show2: "Chord 1",
  },
  {
    keyWord: "W",
    sound: Heater2,
    sound2: Chord2,
    show: "Heater 2",
    show2: "Chord 2",
  },
  {
    keyWord: "E",
    sound: Heater3,
    sound2: Chord3,
    show: "Heater 3",
    show2: "Chord 3",
  },
  {
    keyWord: "A",
    sound: Heater4,
    sound2: Shaker,
    show: "Heater 4",
    show2: "Shaker ",
  },
  {
    keyWord: "S",
    sound: Clap,
    sound2: OpenHH,
    show: "Clap",
    show2: "Open HH",
  },
  {
    keyWord: "D",
    sound: Open,
    sound2: ClosedHH,
    show: "Open HH",
    show2: "Closed HH",
  },
  {
    keyWord: "Z",
    sound: Kick,
    sound2: PunchKick,
    show: "Kick-n-Hat",
    show2: "Closed HH",
  },
  {
    keyWord: "X",
    sound: Kick2,
    sound2: SideKick,
    show: "Kick",
    show2: "Punchy Kick",
  },
  {
    keyWord: "C",
    sound: Closed,
    sound2: Snare,
    show: "Closed-HH",
    show2: "Snare",
  },
];
export default keys;
