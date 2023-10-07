import { readFile } from 'fs/promises';
import path from 'path';

const timeout = async (num: number): Promise<void> => {
    return new Promise(res => {
        setTimeout(() => res(), num)
    })
}

const getData = async (): Promise<string> => {
    const content = await readFile(path.join(process.cwd(), 'src', 'app', 'text-file.txt'), 'utf8');
    await timeout(1000);
    return content
}

export const ServerComponent = async () => {
    const title = await getData();

    const randomColor = () => {
        return Math.random() > 0.5 ? 'text-red-900' : 'text-yellow-600'
    }
    return (
        <span className={randomColor()}>
            {title}
        </span>
    );
};
