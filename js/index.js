function addCharacter(character) {
	const accept = '1234567890+-*/.';
	const operators = '+-*/';
	if (accept.indexOf(character) > -1) {
		let currentValue = document.querySelector('#screen').value;
		if (
			operators.includes(currentValue[currentValue.length - 1]) &&
			operators.includes(character)
		) {
			console.log(currentValue);
			currentValue = currentValue.slice(0, currentValue.length - 1) + character;
			console.log(currentValue);

			document.querySelector('#screen').value = currentValue;
		} else document.querySelector('#screen').value += character.toString();
	}
}

function removeCharacter() {
	document.querySelector('#screen').value = document
		.querySelector('#screen')
		.value.slice(0, -1);
}

function removeAll() {
	document.querySelector('#screen').value = '';
}

function calculate() {
	const calculation = document.querySelector('#screen').value;
	try {
		//  error possible
		const result = eval(calculation);
		if (result === Infinity) {
			throw new Error('Infinity');
		}
		document.querySelector('#screen').value = result;
	} catch (error) {
		document.querySelector('#screen').value = 'ERROR';
		setTimeout(() => {
			removeAll();
		}, 500);
	}
}

document.querySelectorAll('.btn').forEach((btn) => {
	btn.addEventListener('click', () => {
		addCharacter(btn.textContent);
	});
});

document.querySelector('.clear').addEventListener('click', () => {
	removeCharacter();
});

document.querySelector('.clear-all').addEventListener('click', () => {
	removeAll();
});

document.querySelector('.equal').addEventListener('click', () => {
	calculate();
});
