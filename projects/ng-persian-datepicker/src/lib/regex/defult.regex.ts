import { IRegex } from '../interface/IRegex';

export const defaultRegex: IRegex = {
    DATE: /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/,
    TIME: /^(0\d|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
    TIME_NO_SECONDS: /^(0\d|1\d|2[0-3]):([0-5]\d)$/,
    DATETIME: /^(\d{4})\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\s+(0\d|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/, 
    DATETIME_NO_SECONDS: /^(\d{4})\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\s+(0\d|1\d|2[0-3]):([0-5]\d)$/
};
