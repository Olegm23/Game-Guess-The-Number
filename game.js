let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

console.log(number);

prompt.addEventListener('submit', handleSubmit);

printMessage('Ввидите имя игрока:');

input.focus();

function handleSubmit(event) {
	event.preventDefault();

	proccessInput(input.value);

	input.value = '';
}

function printMessage(message) {
	let li = document.createElement('li');

	li.textContent = message;

	output.appendChild(li);
}

function clearOutput() {
	for (let i = 0; i < output.children.length; i++) {
		output.removeChild(output.children[i]);
	}
}

function proccessInput(input) {
	if (!input) return;

	if (!name) {
		name = input;
		clearOutput();
		printMessage(`${name}, загадано число от 0 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "верно".`);
		return;
	}

	printMessage(input);

	let guess = Number.parseInt(input);

	if (Number.isNaN(guess)) return;

	guesses += 1;

	if (guess > number) {
		printMessage('Много. Попробуй еще раз.');
	} else if (guess < number) {
		printMessage('Мало. Попробуй еще раз.')
	} else {
		printMessage(`Верно, это число ${guess}.`);
		printMessage(`Количество попыток ${guesses}.`);
		printMessage('GAME OVER');

		prompt.remove();
	}

}

