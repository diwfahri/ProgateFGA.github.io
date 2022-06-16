const numbers=document.querySelectorAll(".number")
const calculatorScreen=document.querySelector('.calculator-screen')
const operators=document.querySelectorAll(".operator")
const equalSign=document.querySelector('.equal-sign')
const clearBtn=document.querySelector('.all-clear')
const decimal=document.querySelector('.decimal')
const percentage=document.querySelector('.percentage')

let prevNumber=''
let calculationOperator=''
let currentNumber='0'

const inputNumber=(number) => {
	if(currentNumber==='0'){
		currentNumber=number
	}else{
		currentNumber+=number
	}
}

const updateScreen=(number) =>{
	calculatorScreen.value=number
}

numbers.forEach((number) => {
	number.addEventListener("click",(event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

const inputOperator=(operator) =>{
	if(calculationOperator===''){
		prevNumber=currentNumber
	}
	calculationOperator=operator
	currentNumber='0'
}

operators.forEach((operator) =>{
	operator.addEventListener("click", (event) =>{
		inputOperator(event.target.value)
	})
})

const calculate=() => {
	let result=''
	switch(calculationOperator){
		case "+":
			result=parseFloat(prevNumber)+parseFloat(currentNumber)
			break
		case "-":
			result=parseFloat(prevNumber)-parseFloat(currentNumber)
			break
		case "*":
			result=parseFloat(prevNumber)*parseFloat(currentNumber)
			break
		case "/":
			result=parseFloat(prevNumber)/parseFloat(currentNumber)
			break
		default:
			break
	}
	currentNumber=result
	calculationOperator=''
}

equalSign.addEventListener('click', () =>{
	calculate()
	updateScreen(currentNumber)
})


const clearAll=() =>{
	prevNumber=''
	calculationOperator=''
	currentNumber='0'
}

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

inputDecimal=(dot) =>{
	if(currentNumber.includes('.')){
		return
	}
	currentNumber += dot
}

decimal.addEventListener('click', (event) =>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

const percen=()=>{
	currentNumber=parseFloat(currentNumber)/100
	calculationOperator=''
}

percentage.addEventListener('click', (event) =>{
	percen()
	updateScreen(currentNumber)
})