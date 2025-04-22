// js-dos.d.ts
declare module 'js-dos' {
    export interface DosCommandInterface {
        mount: (dir: string, path: string) => Promise<void>;
        run: (commands: string[]) => Promise<void>;
        saveState: () => any;
        loadState: (state: any) => Promise<void>;
        exit: () => void;
    }

    export interface DosOptions {
        wdosboxUrl: string;
        cycles: string | number;
        autolock: boolean;
    }

    export function Dos(canvas: HTMLCanvasElement, options: DosOptions): Promise<DosCommandInterface>;
}