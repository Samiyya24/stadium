function createPhoneNumber(numbers) {
  // Extracting parts of the phone number
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6, 10).join('');

  // Returning the formatted phone number
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Example usage:
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: (123) 456-7890
