export function preventNonAlphabeticInput(event) {
  if (!event.key.match(/^[A-Za-z\s]$/)) {
    alert("Provide only English letters and spaces");
    event.preventDefault();
  }
}

export function validateName(name) {
  const regex = /^(?:[A-Za-z]{2,}\s?)+$/;
  return regex.test(name.trim());
}
