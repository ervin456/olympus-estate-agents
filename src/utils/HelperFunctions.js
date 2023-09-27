export function cutFirstNCharacter(text, n) {
  if (text.length > n) {
    let temp = text.slice(0, n);
    temp = temp.concat("...");
    return temp;
  } else {
    return text;
  }
}

export function getDisplayName(
  nrOfBedrooms,
  propertyType,
  type,
  address,
  street
) {
  return `
${nrOfBedrooms} bed ${propertyType} ${
    type === "sale" ? "for sale " : "to rent"
  } in ${address}, ${street}`;
}
