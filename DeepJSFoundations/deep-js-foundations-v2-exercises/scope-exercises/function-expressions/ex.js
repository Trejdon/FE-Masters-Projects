function printRecords(recordIds) {
	const records = [];

	function sortRecordsByName (a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}

	function logRecord(record) {
		const { name, id, paid} = record;
		const paymentStatus = paid ? "Paid" : "Not Paid"
		console.log(`${name} (${id}): ${paymentStatus}`)
	}

	for(let id of recordIds) {
		function matchId (student) {
			return student.id == id
		}

		let found = studentRecords.find(matchId)
		
		if (found) {
			records.push(found);
		}
	}

	records.sort(sortRecordsByName);
	records.forEach(logRecord)
}

function paidStudentsToEnroll() {
	function hasPaid(student) {
		return student.paid;
	}
	function isNotEnrolled(student) {
		return !currentEnrollment.includes(student.id)
	}
	function getId(student) {
		return student.id;
	}

	const paidStudents = studentRecords.filter(hasPaid);
	const paidNotEnrolled = paidStudents.filter(isNotEnrolled);
	const paidNotEnrolledIds = paidNotEnrolled.map(getId);

	return [...currentEnrollment, ...paidNotEnrolledIds]
}

function remindUnpaid(recordIds) {
	function hasNotPaid(student) {
		return !student.paid;
	}

	function mapIdToStudent (id) {
		function matchStudent(student) {
			return student.id == id
		}
		return studentRecords.find(matchStudent);
	}

	function getId(student) {
		return student.id;
	}

	const mappedRecords = recordIds.map(mapIdToStudent);
	const unpaidStudents = mappedRecords.filter(hasNotPaid)
	const unpaidIds = unpaidStudents.map(getId);

	printRecords(unpaidIds);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];
// DONE
printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
