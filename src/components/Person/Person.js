import React from "react";

function Person(props) {
  console.log(props);
  return (
    <div>
      <div>
        We are cool and young. {props.name} {props.years}
      </div>
      <div />
    </div>
  );
}

export default Person;
