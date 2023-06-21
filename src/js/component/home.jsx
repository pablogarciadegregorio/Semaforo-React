import React, {useState} from "react";
import purpleButton from "../component/purpleButton";
//include images into your bundle


//create your first component
const Home = () => {

	const [rojo, setRojo] = useState("");
	const [amarillo, setAmarillo] = useState("");
	const [verde, setVerde] = useState("");
	const [morado, setMorado] = useState("");


	
			function cambiarRojo(){
				setRojo("selectedRed");
				setAmarillo("");
				setVerde("");
				setMorado("");
			};
			function cambiarAmarillo(){
				setAmarillo("selectedYellow");
				setVerde("");
				setRojo("");
				setMorado("");
			}
			function cambiarVerde(){
				setVerde("selectedGreen");
				setRojo("");
				setAmarillo("");
				setMorado("");
			}
			
			function cambiarMorado(){
				setVerde("");
				setRojo("");
				setAmarillo("");
				setMorado("selectedPurple");
			}


			// PARTE OPCIONAL DE CICLADO DE 
			
			function cicloColor(){

			if (visibilidad === ("")){	
				if (rojo === ("selectedRed")) {
				   setAmarillo("selectedYellow");
				   setRojo("");
				   setVerde("");
				   setMorado("");
				 }

				 if (amarillo === ("selectedYellow")) {
					setAmarillo("");
					setRojo("");
					setVerde("selectedGreen");
					setMorado("");
				  }
				  if (verde === ("selectedGreen")) {
					setAmarillo("");
					setRojo("");
					setVerde("");
					setMorado("selectedPurple");
				  }

				  if (morado === ("selectedPurple")) {
					setAmarillo("");
					setRojo("selectedRed");
					setVerde("");
					setMorado("");
				  }

				  if ((rojo === ("")) && (amarillo === ("")) && (verde === ("")) && (morado === (""))){
					setAmarillo("");
					setRojo("selectedRed");
					setVerde("");
					setMorado("");
				  }  
			}

			
			if (visibilidad === ("botonOculto")){	
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

				
				  if ((rojo === ("")) && (amarillo === ("")) && (verde === (""))){
					setAmarillo("");
					setRojo("selectedRed");
					setVerde("");
					
				  }  
			}













		}


			// PARTE OPCIONAL DE GENERADOR DE NUEVA BOMBILLA

			const [visibilidad, setVisibilidad] = useState("botonOculto")

			function nuevaBombilla(){
					if (visibilidad === ("botonOculto")) {setVisibilidad("");	}
					if (visibilidad === ("")) {setVisibilidad("botonOculto");	}					
			}


	return (
			<>
			<div className="container d-flex justify-content-center">
				<div className="palo bg-dark rounded-top "></div>
				
				
				<div className="d-flex flex-column bg-dark rounded p-4 ">
					<button type="button" onClick={cambiarRojo} className={"rojo btn btn-danger rounded-circle mb-3 " + rojo} ></button>
					<button type="button" onClick={cambiarAmarillo} className={"amarillo btn btn-warning rounded-circle mb-3 " + amarillo}></button>
					<button type="button" onClick={cambiarVerde} className={"verde btn btn-success rounded-circle mb-3 " + verde}></button>
					<button type="button" onClick={cambiarMorado} className={"morado btn   rounded-circle " + visibilidad + " " + morado}></button>
					
				</div>
				<div className="botones">
				<button type="button" onClick={cicloColor} className=" ciclo btn btn-white  mt-1"><i class="fa-solid fa-arrows-spin"></i></button>
				<button type="button" onClick={nuevaBombilla} className=" nuevaBombilla btn btn-white  mt-1"><i class="fa-solid fa-lightbulb"></i></button>
				</div>

			</div>
			
			</>
	);
};

export default Home;
