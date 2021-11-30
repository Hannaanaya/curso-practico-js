const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesCredit = notes.map(function(noteObject) {
    return noteObject.note * noteObject.credit;
});
const sumOfNotes = notesCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
);

const credits = notes.map(function(noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioNotas = sumOfNotes / sumOfCredits;