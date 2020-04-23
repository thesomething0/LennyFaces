async function makeButtons() {
  const limit = document.getElementById('len-input').value;
  const response = await fetch(`https://api.lenny.today/v1/random?limit=${limit}`);
  const mainDiv = document.getElementById('mainDiv');
  const faces = await response.json();

  faces.forEach((row, index) => {
    const button = document.createElement('button');
    button.innerHTML = row.face.split('').map(character => `&#x${character.charCodeAt(0).toString(16)};`).join('');
    button.id = `lenny_face_${index}`;
    button.className = 'lenny_face_button';
    button.onclick = () => copyClipboard(row.face);
    mainDiv.appendChild(button);
  });
}

function copyClipboard(face) {
  const textarea = document.createElement('textarea');
  textarea.style = { display: 'none', position: 'absolute' };
  textarea.value = face;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function clearButtons() {
  let buttonsToRemove = Array.from(document.getElementsByClassName('lenny_face_button'));

  buttonsToRemove.forEach(button => {
    button.parentElement.removeChild(button);
  });
}
