import { CHOOSE_ITEM, END_GAME, RANDOM_ITEM } from "./actions";

const initialState = {
  countWin: 0,
  countGame: 0,
  resultText: "Hòa nhau",
  chooseArr: [
    { ma: "rock", img: "./img/rock.png", datCuoc: true },
    { ma: "paper", img: "./img/paper.png", datCuoc: false },
    { ma: "scissors", img: "./img/scissors.png", datCuoc: false },
  ],
  computerChoose: { ma: "rock", img: "./img/rock.png" },
};

const oanTuTiReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHOOSE_ITEM: {
      let chooseArrUpdate = [...state.chooseArr];
      chooseArrUpdate = chooseArrUpdate.map((item) => {
        if (item.ma === actions.payload) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.chooseArr = chooseArrUpdate;
      return { ...state };
    }
    case RANDOM_ITEM: {
      let randomNumber = Math.floor(Math.random() * 3);
      let randomChoose = state.chooseArr[randomNumber];
      state.computerChoose = randomChoose;
      return { ...state };
    }
    case END_GAME: {
      //tìm player đã chọn
      let player = state.chooseArr.find((item) => {
        return item.datCuoc === true;
      });

      //tạo dữ liệu xét các trường hợp
      let rpsData = {
        rock: { scissors: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissors: 0 },
        scissors: { paper: 1, scissors: 0.5, rock: 0 },
      };

      //handle result
      switch (rpsData[player.ma][state.computerChoose.ma]) {
        case 1:
          state.resultText = "You win, I love you pặc pặc!!";
          state.countWin++;
          break;
        case 0.5:
          state.resultText = "Hòa nhau";
          break;
        case 0:
          state.resultText = "Bạn thua sml";
          break;
        default:
          break;
      }
      state.countGame++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default oanTuTiReducer;
