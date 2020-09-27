import React from "react";
import ReactDOM from "react-dom";

// import DateTime from './DateTime/'
// import Quiz from './Quiz/'
import Recipe from './Recipe'

// TODO: use a Router to show each one

class App extends React.Component {
	render() {
		return (
			<div>
				{/* <DateTime /> */}
				{/* <Quiz /> */}
				<Recipe />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));