"use strict";
class gradebook {
    constructor() {
        this.students = [];
    }
    addstudent(student) { this.students.push(student); }
    updategrades(name, newgrades) {
        const student = this.students.find(s => s.name === name);
        if (student) {
            student.grade = newgrades;
        }
    }
    getaverage(name) {
        const student = this.students.find(s => s.name === name);
        if (!student) {
            return null;
        }
        return student.grade.reduce((a, b) => a + b, 0) / student.grade.length;
    }
    getclassaverage() {
        const allgrades = this.students.flatMap(s => s.grade);
        return allgrades.reduce((a, b) => a + b, 0) / allgrades.length;
    }
    gettopstudent() {
        if (this.students.length === 0) {
            return null;
        }
        return this.students.reduce((top, curr) => {
            const avgtop = top.grade.reduce((a, b) => a + b, 0) / top.grade.length;
            const avgcurr = curr.grade.reduce((a, b) => a + b, 0) / curr.grade.length;
            return avgcurr > avgtop ? curr : top;
        });
    }
}
//# sourceMappingURL=main.js.map