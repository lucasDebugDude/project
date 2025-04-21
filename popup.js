function createSecurePassword(length = 15) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let newPassword = '';
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }
  let formattedPassword = '';
  for (let i = 0; i < newPassword.length; i++) {
    if (i > 0 && i % 5 === 0) {
      formattedPassword += '-';
    }
    formattedPassword += newPassword[i];
  }
  return formattedPassword;
}

document.getElementById('createPasswordButton').addEventListener('click', () => {
  const password = createSecurePassword();
  document.getElementById('passwordDisplay').value = password;
});

document.getElementById('copyPasswordButton').addEventListener('click', () => {
  const passwordField = document.getElementById('passwordDisplay');
  passwordField.select();
  document.execCommand('copy');
});

document.querySelector('.close-button').addEventListener('click', () => {
  const windowElement = document.querySelector('.window');
  windowElement.style.display = 'none';
});