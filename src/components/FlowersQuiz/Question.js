export const Question = (props) => {
  // STYLE

  const cssQuestionContainer = {
    position: "relative",
    minHeight: "250px",
    color: "white",
    margin: "0px auto",
    padding: "20px",
    textShadow: "3px 3px 3px black",
  };

  const cssQuestionHeader = {
    fontSize: "25pt",
  };

  const cssQuestionContent = {
    fontSize: "22pt",
    width: "850px",
    margin: "0 auto",
    textAlign: "center",
  };

  const cssQuestionBtn = {
    padding: "5px",
    margin: "10px",
    width: "250px",
    height: "60px",
    fontSize: "20pt",
    fontWeight: "600",
  };

  return (
    <div style={cssQuestionContainer}>
      <h1 style={cssQuestionHeader}>Câu hỏi: {props.data.id}</h1>
      <div style={cssQuestionContent}>{props.data.question}</div>
      <br />
      <br />
      <button
        onClick={() => {
          props.handleAnswer(props.data.id, "true");
        }}
        style={{
          ...cssQuestionBtn,
          color: "green",
        }}
      >
        Trả lời đúng!
      </button>
      <button
        onClick={() => {
          props.handleAnswer(props.data.id, "false");
        }}
        style={{
          ...cssQuestionBtn,
          color: "red",
        }}
      >
        Rất tiếc!
      </button>
    </div>
  );
};
