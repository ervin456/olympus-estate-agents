export function cutFirstNCharacter(text, n) {
  if (text.length > n) {
    let temp = text.slice(0, n);
    temp = temp.concat("...");
    return temp;
  } else {
    return text;
  }
}
