import React, { useState } from 'react';
import './card.css';

export const Card = () => {
	const [active, setActive] = useState('');
	const [input, setInput] = useState('');
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

	const calculateResult = () => {
    const val = Number(input);
		if (active === '1') {    
			setCelsius(val.toFixed(2));
			setFahrenheit((val * (9 / 5) + 32).toFixed(2));
			setKelvin((val + 273.15).toFixed(2));
		} else if (active === '2') {    
			setCelsius(((val - 32) * (5 / 9)).toFixed(2));
			setFahrenheit(val.toFixed(2));
			setKelvin((((val - 32) * (5 / 9)) + 273.15).toFixed(2));
		} else if (active === '3') {    
			setCelsius((val - 273.15).toFixed(2));
			setFahrenheit(((val - 273.15) * (9 / 5) + 32).toFixed(2));
			setKelvin(val.toFixed(2));
		} 
	};

	return (
		<div className="container">
			<div className="input__flex">
				<input type="number" className="input" placeholder="Enter temperature" value={input} onChange={(e) => setInput(e.target.value)} />
				<button id="1" className={active === '1' ? 'temp__button active' : `temp__button`} onClick={(e) => setActive(e.target.id)}>
					C
				</button>
				<button id="2" className={active === '2' ? 'temp__button active' : `temp__button`} onClick={(e) => setActive(e.target.id)}>
					F
				</button>
				<button id="3" className={active === '3' ? 'temp__button active' : `temp__button`} onClick={(e) => setActive(e.target.id)}>
					K
				</button>
			</div>

			<h1 className="subheading">Temperature</h1>
			<p className="result">Celsius: {celsius} °C</p>
			<p className="result">Fahrenheit: {fahrenheit} °F</p>
			<p className="result">Kelvin: {kelvin} K</p>

			<button className="result__button" onClick={calculateResult}>
				Convert
			</button>
		</div>
	);
};
