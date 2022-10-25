const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Yes.', 'No.', 'You wish', 'You do not want to know the answer.']

const showRandomAnswer = () => {
	const number = Math.floor(Math.random() * answers.length)

	answer.innerHTML = `<span>Answer:</span> ${answers[number]}`
}
const inputCheck = () => {
	if (input.value == '') {
		error.textContent = 'You have to ask a question!'
		answer.textContent = ''
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = 'Question should end with question mark'
		answer.textContent = ''
	} else {
		showRandomAnswer()
		error.textContent = ''
	}
	img.classList.remove('shake-animation')
}

img.addEventListener('click', () => {
	img.classList.add('shake-animation')
	setTimeout(inputCheck, 1000)
})

//Rozwiązanie z kursu

// const ball = document.querySelector('img')
// const input = document.querySelector('input')
// const answer = document.querySelector('.answer')
// const error = document.querySelector('.error')

// const answerArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...']

// const shakeBall = () => {
//     ball.classList.add('shake-animation')
//     setTimeout(checkInput, 1000)
// }

// const checkInput = () => {
// 	if (input.value !== '' && input.value.slice(-1) === '?') {
// 		generateAnswer()
// 		error.textContent = ''
// 	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
// 		error.textContent = 'Pytanie musi być zakończone "?".'
// 		answer.textContent = ''
// 	} else {
// 		error.textContent = 'Musisz zadać jakieś pytanie!.'
// 		answer.textContent = ''
// 	}
//     ball.classList.remove('shake-animation')
// }

// const generateAnswer = () => {
// 	const number = Math.floor(Math.random() * answerArr.length)
// 	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
// }

// ball.addEventListener('click', shakeBall)
