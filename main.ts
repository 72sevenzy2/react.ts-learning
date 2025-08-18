interface Student { name: string; grade: number[]; }
class gradebook {
  private students: Student[] = [];
  addstudent(student: Student): void { this.students.push(student); }
  updategrades(name: string, newgrades: number[]): void {
    const student = this.students.find(s => s.name === name);
    if (student) { student.grade = newgrades; }
  }
  getaverage(name: string): number | null {
    const student = this.students.find(s => s.name === name);
    if (!student) { return null; }

    return student.grade.reduce((a, b) => a + b, 0) / student.grade.length;
  }
  getclassaverage(): number {
    const allgrades = this.students.flatMap(s => s.grade);
    return allgrades.reduce((a, b) => a + b, 0) / allgrades.length;
  }
  gettopstudent(): Student | null {
    if (this.students.length === 0) { return null; }
    return this.students.reduce((top, curr) => {
      const avgtop = top.grade.reduce((a, b) => a + b, 0) / top.grade.length;
      const avgcurr = curr.grade.reduce((a, b) => a + b, 0) / curr.grade.length;
      return avgcurr > avgtop ? curr : top;
    })
  }
}