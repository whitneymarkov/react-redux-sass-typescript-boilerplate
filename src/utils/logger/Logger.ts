import { ILogger } from './ILogger';

const debug = (msg: any) => {
    // tslint:disable-next-line
    console.log(msg);
};

const warn = (msg: any) => {
    // tslint:disable-next-line
    console.log(msg);
};

const info = (msg: any) => {
    // tslint:disable-next-line
    console.log(msg);
};

const error = (msg: any) => {
    // tslint:disable-next-line
    console.log(msg);
};

export const Logger: ILogger = {
    debug,
    error,
    info,
    warn,
};
