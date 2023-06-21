import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [rojo, setRojo] = useState("");
	// const [ramarillo, setAmarillo] = useState("btn-warning");
	// const [verde, setVerde] = useState("btn-green");

	function cambiarRojo(){
		setRojo("selected");
		
	}



	return (

			<div className="container d-flex justify-content-center">
				<div className="palo bg-dark rounded-top "></div>
				
				
				<div className="d-flex flex-column bg-dark rounded p-4 ">
					<button type="button" onClick={cambiarRojo} className={"rojo btn btn-danger rounded-circle mb-3 " + rojo} ></button>
					<button type="button" className="amarillo btn btn-warning rounded-circle mb-3"></button>
					<button type="button" className="verde btn btn-success rounded-circle"></button>
				</div>
			</div>
	);
};

export default Home;
