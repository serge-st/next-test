import { readFile } from 'fs/promises';
import path from 'path';
import { timeout } from './timeout';

const getData = async (): Promise<string> => {
    const content = await readFile(path.join(process.cwd(), 'src', 'app', 'regular-server-component.txt'), 'utf8');
    await timeout(2000);
    return content
}

export const RegularServerComponent = async () => {
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

