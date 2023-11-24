export function preventNonAlphabeticInput(event) {
  if (!event.key.match(/^[A-Za-z]+$/)) {
    alert("Provide only english letters");
    event.preventDefault();
  }
}

export function validateItem(item) {
  const regex = /^[A-Za-z]{2,}$/;
  return regex.test(item.trim());
}
