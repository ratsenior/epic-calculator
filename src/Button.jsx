function Button(props){
    
    const display = document.getElementById("display")
    const handleClick = () => {
        try{
            let currentText = display.textContent
            if (props.text == "="){
                let evaluation = eval(currentText)
                display.textContent = evaluation 
            }
            else if (props.text == "CE" || props.text == "C"){
                display.textContent = ""
            }
            else if (props.text == "←"){
                display.textContent = currentText.slice(0,-1)
            }
            else if (props.text == "%"){
                let evaluation = eval(currentText / 100)
                display.textContent = evaluation
            }
            else if (props.text == "1/x"){
                let evaluation = eval(1 / currentText)
                display.textContent = evaluation
            }
            else if (props.text == "x^2"){
                let evaluation = eval((currentText) * (currentText))
                display.textContent = evaluation
            }
            else if (props.text == "sqrt(x)"){
                let evaluation = eval(Math.sqrt(currentText))
                display.textContent = evaluation
            }
            else if (props.text == "+/-"){
                let evaluation = eval(-1*currentText)
                display.textContent = evaluation
            }
            else{
            const newText = currentText + props.text
            display.textContent = newText
            }
        } catch (e){
            display.textContent = "Error"
        }

    }

    return(<button id ={props.id} onClick={handleClick} className="app-button">{props.text}</button>)
}


export default Button