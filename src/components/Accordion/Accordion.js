import React from "react";

function School(props) {
  return (
    <div>
      <img src="http://indico.jinr.ru/conferenceDisplay.py/getLogo?confId=447" />
      <div>
        <p>{props.name} has finished the school</p>
      </div>
    </div>
  );
}

export default School;
