import { useState, useEffect } from "react";
import { Question } from "./Question";
import { ListQuestion } from "./ListQuestion";
import { questiondata } from "../../data/questions";
import { appconfig } from "../../data/app.config";

const FlowersQuiz = () => {
  // import data from ./data
  const data = questiondata;
  const [listQuestion, setListQuestion] = useState(() => {
    // Get data from LocalStorage
    // If NULL get from data
    const localListQuestion = JSON.parse(localStorage.getItem("listQuestion"));
    if (localListQuestion == null) {
      return data;
    } else {
      return localListQuestion;
    }
  });

  // User Effect: chooseQuestion
  useEffect(() => {
    localStorage.setItem("listQuestion", JSON.stringify(listQuestion));
  }, [listQuestion]);

  // 1 - Choose Question
  const [chooseQuestion, setChooseQuestion] = useState(() => {
    const localQuestion = JSON.parse(localStorage.getItem("chooseQuestion"));
    return localQuestion;
  });

  // User Effect: chooseQuestion
  useEffect(() => {
    localStorage.setItem("chooseQuestion", JSON.stringify(chooseQuestion));
  }, [chooseQuestion]);

  // Handle question choose
  const handleChoose = (id, status) => {
    if (status === 1) {
      const question = listQuestion.find((ques) => ques.id === id);
      setChooseQuestion(question);
    }
  };

  // Declare random number and set default 99
  const [randomNumber, setRandomNumber] = useState(99);

  // Handle Random number when click button
  const handleRandomClick = () => {
    // Get all numbers which status = 1 / not choosen
    const dataLength = listQuestion.filter((item) => item.status === 1);

    // set number run
    let num = 15;
    const timer = setInterval(() => {
      num = num - 1;
      const ranNum = Math.floor(Math.random() * dataLength.length);
      setRandomNumber(dataLength[ranNum].id);
      // clear Interval if num == 0
      if (num === 0) {
        clearInterval(timer);
      }
      // set speed
    }, 300);
  };

  // Change status when user answer right or wrong
  function handleAnswer(id, type) {
    const newList = listQuestion.map((ques) => {
      if (ques.id === id && type === "true") {
        ques.status = 3;
      }

      if (ques.id === id && type === "false") {
        ques.status = 2;
      }
      return ques;
    });

    setListQuestion(newList);
    setChooseQuestion(null);
  }

  // STYLE
  const cssFlowerWrapper = {
    textAlign: "center",
    margin: "0 auto",
    backgroundImage: "url(./doan.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };

  const cssFlowerHeaderText = (txtShadow, txtColor) => ({
    fontSize: "25pt",
    fontWeight: "800",
    textShadow: `3px 3px 3px ${txtShadow}`,
    color: `${txtColor}`,
    padding: "10px",
  });

  const cssFlowerContainer = {
    width: "1000px",
    textAlign: "center",
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "rgb(26 153 255 / 50%)",
    borderRadius: "25px",
  };

  const cssFlowerBtn = {
    color: "green",
    padding: "10px",
    margin: "10px",
    width: "300px",
    height: "70px",
    fontSize: "23pt",
    fontWeight: "700",
  };

  return (
    <div style={cssFlowerWrapper}>
      <div
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={cssFlowerHeaderText("white", "#0766dd")}>
          {appconfig.flowerquiz.header}
        </div>
        <div style={cssFlowerHeaderText("white", "red")}>
          {appconfig.flowerquiz.title}
        </div>
        <br />
        <div style={cssFlowerContainer}>
          {chooseQuestion === null ? (
            <div>
              <ListQuestion
                data={listQuestion}
                handleChoose={handleChoose}
                randomNumber={randomNumber}
              />
              <button
                style={cssFlowerBtn}
                onClick={() => {
                  handleRandomClick();
                }}
              >
                Bấm để chọn hoa
              </button>
            </div>
          ) : (
            <Question data={chooseQuestion} handleAnswer={handleAnswer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowersQuiz;
