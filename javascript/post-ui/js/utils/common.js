//  function set text for item in liElenment (post template)

export function setTextContent(parent, selector, content) {
  if (!parent) return;
  const element = parent.querySelector(selector);
  if (element) element.textContent = content;
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength - 1)}…`;
}
