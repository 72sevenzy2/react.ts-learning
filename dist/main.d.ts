declare const button: HTMLButtonElement;
declare const adding: HTMLParagraphElement;
declare const buttondec: HTMLButtonElement;
declare const buttonres: HTMLButtonElement;
interface Proto {
    count: number;
    reset: number;
}
type omitreset = Omit<Proto, 'reset'>;
declare const obj: omitreset;
//# sourceMappingURL=main.d.ts.map