/**
 * <div id="parent">
 *      <div id ="child">
 *          <h1>This is inner H1 tag.</h1>
 *          <h2>This is H2 inner Tag!!</h2>
 *      </div>
 *       <div id ="child2">
 *          <h1>This is inner H1 tag.</h1>
 *          <h2>This is H2 inner Tag!!</h2>
 *      </div>
 * </div>
 * 
 * 
 */
const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"child"},
                 [React.createElement("h1",{},"This is inner Tag!!"),
                    React.createElement("h2",{},"This is H2 inner Tag!!")
                 ]),
                 React.createElement("div",{id:"child2"},
                    [React.createElement("h1",{},"This is inner Tag2!!"),
                       React.createElement("h2",{},"This is H2 inner Tag2!!")
                    ])
                ]);
const heading = React.createElement("h1",{id:"firstElement"},"Hello World from React");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);