// TODO: write the validation functions
function isValidName(name) {
	var isString = typeof name === 'string';

	if (!isString) {
		return false;
	} else if (name.length === 0) {
		return false;
	} else if (name.trim().length < 3) {
		return false;
	}

	return true;
}

function hoursAttended(attended, length) {
	// Keep in mind the empty string coercion corner case and handle it
	if (typeof attended == 'string' && attended.trim() != '') {
    // Since we want them to be numbers, explicitly coercing them to be so 
    // via retyping them shouldn't be considered bad form.
		attended = Number(attended);
	}
	if (typeof length == 'string' && length.trim() != '') {
		length = Number(length);
	}

	if (
		attended > 0 &&
		length > 0 &&
		Number.isInteger(attended) &&
		Number.isInteger(length) &&
		attended <= length
	) {
		return true;
	}
	return false;
}

// tests:
console.log(isValidName('Frank') === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
