import "../../App.css";
export const ListQuestion = (props) => {
  // STYLE
  const backgroundDiv = {
    float: "left",
    width: "60px",
    height: "60px",
    textAlign: "center",
    backgroundSize: "90%",
    backgroundPosition: "center",
    backgroundImage: "url(./flowers.png)",
    backgroundRepeat: "no-repeat",
    padding: "10px",
    margin: "10px",
    backgroundColor: "rgb(54 185 179)",
    borderRadius: "25px",
  };

  const cssListQuestionTxt = {
    position: "relative",
    top: "12%",
    fontSize: "20pt",
    fontWeight: "500",
    textShadow: "3px 3px 3px pink",
    color: "white",
  };

  const handleMouseOver = (e) => {
    //e.currentTarget.style.backgroundColor = "yellow";
    e.currentTarget.style.cursor = "pointer";
  };

  const handleMouseout = (e) => {
    //e.currentTarget.style.backgroundColor = "#f574bb";
    e.currentTarget.style.cursor = "auto";
  };

  return (
    <div>
      {props.data.map((question) => (
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseout}
          onClick={() => {
            props.handleChoose(question.id, question.status);
          }}
          style={
            question.status === 1
              ? question.id !== props.randomNumber
                ? backgroundDiv
                : { ...backgroundDiv, backgroundColor: "yellow" }
              : { ...backgroundDiv, filter: "grayscale(50%)" }
          }
          key={question.id}
        >
          <div style={cssListQuestionTxt}>{question.id}</div>
        </div>
      ))}
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
