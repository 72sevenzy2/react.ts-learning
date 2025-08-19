interface Student {
    name: string;
    grade: number[];
}
declare class gradebook {
    private students;
    addstudent(student: Student): void;
    updategrades(name: string, newgrades: number[]): void;
    getaverage(name: string): number | null;
    getclassaverage(): number;
    gettopstudent(): Student | null;
}
//# sourceMappingURL=main.d.ts.map