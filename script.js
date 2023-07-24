//your JS code here. If required.
// JavaScript
const displayTextWithDelay = async () => {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  if (!text || isNaN(delay) || delay <= 0) {
    outputDiv.textContent = "Please enter valid text and positive delay value.";
    return;
  }

  try {
    await new Promise(resolve => setTimeout(resolve, delay));
    outputDiv.textContent = text;
	  textInput.textContent="";
  } catch (error) {
    console.error('Error:', error);
  }
};

const btn = document.getElementById('btn');
btn.addEventListener('click', displayTextWithDelay);
