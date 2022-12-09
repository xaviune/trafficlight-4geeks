import React, { useState } from "react";
import Button from "react-bootstrap/Button"

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const [activepurple, setActivePurple] = useState("");

	return (
		<>
		<div className="Traffic-light-centered">
			<div className="hanger"></div>
			<div className="Traffic-light">
				<div onClick={() => setSelectedColor("1")} className={"light red" + (selectedColor === "1" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("2")} className={"light yellow" + (selectedColor === "2" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("3")} className={"light green" + (selectedColor === "3" ? " glow" : "")}></div>
				{(activepurple == "on") ? <div onClick={() => setSelectedColor("4")} className={"light purple" + (selectedColor === "4" ? " glow" : "")}></div> : null }
			</div>
			<div className="d-grid gap-2 mt-3">
      			<Button onClick={() => {(selectedColor == "1") ? setSelectedColor("2") : (selectedColor == "2") ? setSelectedColor("3") : (selectedColor == "3") ? setSelectedColor("4") : (selectedColor == "4") ? setSelectedColor("1") : setSelectedColor("1")} }
				variant="primary" size="lg">
      			  Change color
      			</Button>
      			<Button onClick={() => (activepurple == "on") ? setActivePurple("off") : setActivePurple("on")}
				className="purple" variant="success" size="lg">
      			  Add/delete purple
      			</Button>
    		</div>
		</div>
		</>
	);
};

export default Home;
