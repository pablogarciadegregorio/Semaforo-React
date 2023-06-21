import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [rojo, setRojo] = useState("");
	const [amarillo, setAmarillo] = useState("");
	const [verde, setVerde] = useState("");


	
			function cambiarRojo(){
				setRojo("selectedRed");
				setAmarillo("");
				setVerde("");
			};
			function cambiarAmarillo(){
				setAmarillo("selectedYellow");
				setVerde("");
				setRojo("");
			}
			function cambiarVerde(){
				setVerde("selectedGreen");
				setRojo("");
				setAmarillo("");
			}
	

			// PARTE OPCIONAL DE CICLADO DE 
			
			function cicloColor(){
				if (rojo === ("selectedRed")) {
				   setAmarillo("selectedYellow");
				   setRojo("");
				   setVerde("");
				 }

				 if (amarillo === ("selectedYellow")) {
					setAmarillo("");
					setRojo("");
					setVerde("selectedGreen");
				  }
				  if (verde === ("selectedGreen")) {
					setAmarillo("");
					setRojo("selectedRed");
					setVerde("");
				  }

				  if ((rojo === ("")) && (amarillo === ("")) && (verde === ("")) ){
					setAmarillo("");
					setRojo("selectedRed");
					setVerde("");
				  }
			}



	return (
			<>
			<div className="container d-flex justify-content-center">
				<div className="palo bg-dark rounded-top "></div>
				
				
				<div className="d-flex flex-column bg-dark rounded p-4 ">
					<button type="button" onClick={cambiarRojo} className={"rojo btn btn-danger rounded-circle mb-3 " + rojo} ></button>
					<button type="button" onClick={cambiarAmarillo} className={"amarillo btn btn-warning rounded-circle mb-3 " + amarillo}></button>
					<button type="button" onClick={cambiarVerde} className={"verde btn btn-success rounded-circle " + verde}></button>
				</div>
				<button type="button" onClick={cicloColor} className=" ciclo btn btn-white  mt-4"><i class="fa-solid fa-lightbulb"></i></button>
			</div>
			
			</>
	);
};

export default Home;
