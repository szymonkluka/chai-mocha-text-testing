module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const nameParts = fullName.split(' ');
  if (nameParts.length !== 2) return 'Error';
  const [firstName, lastName] = nameParts;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
