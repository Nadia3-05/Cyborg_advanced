export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4]
    }
}
];

export function getSubjects(students) {
    let nameOfSubjects = [];
    for (let i in students.subjects) {
        nameOfSubjects = Object.keys(students.subjects)
            .reduce((acc, char) =>
                    acc.concat(char[0].toUpperCase() + char.slice(1)),
                [])
            .join(", ")
            .replaceAll("_", " ")
            .split(", ")
    }
    return nameOfSubjects;
}