export interface ILogger {
    debug(msg: any): void;
    warn(msg: any): void;
    info(msg: any): void;
    error(msg: any): void;
}
