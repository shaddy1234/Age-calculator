function calculateAge() {
    // Get the birthdate value from the input
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = currentDate - birthdate;

    // Convert the difference to years, months, and days
    const age = new Date(difference);

    // Extract years, months, and days
    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth();
    const days = age.getUTCDate() - 1; // Subtract 1 to adjust for the initial day

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Your age is: ${years} years, ${months} months, and ${days} days.</p>`;
  }