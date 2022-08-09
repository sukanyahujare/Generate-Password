const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")  
// const passBox = document.getElementById("myInput") 
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const clipboard = document.getElementById('clipboard');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

 const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }

    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
   
    if(password.length < totalChar.value ){
     return generatePassword(password) 
    }

    // Generate password perticuller length
    passBox.innerHTML = (truncateString(password,totalChar.value));

 }

//  generatePassword();
 document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = passBox.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});




