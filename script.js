
const result = document.getElementById('result');
const copybtnDOM = document.getElementById('copy');
const length = document.getElementById('length');
const upc = document.getElementById('uppercase');
const no = document.getElementById('numbers');
const sy = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('passwordGeneratorForm');

const UPPERCASE_CODES = f(65, 90);
const LOWERCASE_CODES = f(97, 122);
const NUMBER_CODES = f(48, 57);
const SYMBOL_CODES = f(33, 47).concat(f(58, 64)).concat(f(91, 96)).concat(f(123, 126));

// Copy Password
copybtnDOM.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const passwordToCopy = result.innerText;

  // Edge Case when Password is Empty
  if (!passwordToCopy) return;

  // Copy Functionality
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password Copied to Clipboard');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = length.value;
  const includeUppercase = upc.checked;
  const includeNumbers = no.checked;
  const includeSymbols = sy.checked;
  // const includeLowercase = lc.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols

  );
  result.innerText = password;
});

let generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};

function f(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
