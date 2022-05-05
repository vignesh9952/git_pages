import React from "react";

//import ToggleComponent from "./component/ToggleComponent";
// import TodoComponent from "./component/Todocomponent";
// import LifeCycleMethods from "./component/lifeCycleMethods";
// import ToggleComponent from "./component/ToggleComponent";
// import NewApp from "./component/NewApp";
// import ReactAssign from "./component/ReactAssignment";

// import GreekFunction from "./fuctional_components/greekFunction";
// import Effects from "./fuctional_components/useeffectComponent";
// import Parent from "./fuctional_components/parentComponent";

const tododata = [
  {
    id: 1,
    title: "AAA",
    completed: false,
    active: true,
  },
  {
    id: 2,
    title: "BBB",
    completed: true,
    active: true,
  },
  {
    id: 3,
    title: "CCC",
    completed: false,
    active: true,
  },
  {
    id: 4,
    title: "DDD",
    completed: true,
    active: true,
  },
  {
    id: 5,
    title: "EEE",
    completed: false,
    active: true,
  },
];

function App() {
  return (
    <>
      {/* <LifeCycleMethods props1={"hy"}></LifeCycleMethods> */}
      {/* <TodoComponent props1={tododata}></TodoComponent> */}

      {/* <GreekFunction></GreekFunction> */}
      {/* <ReactAssign></ReactAssign> */}
      {/* <Parent></Parent> */}

      <Effects prop1={"vignesh"}></Effects>
    </>
  );
}
export default App;
