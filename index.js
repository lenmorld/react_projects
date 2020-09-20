import React from "react";
import ReactDOM from "react-dom";

import DateTime from './DateTime/'
// import Survey from './Survey/'

// TODO: use a Router to show each one

class App extends React.Component {
	render() {
		return (
			<div>
				<DateTime />
				{/* <Survey /> */}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));