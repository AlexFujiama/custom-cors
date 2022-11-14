export const defaultError = { status: 403, response: { statusCode: 403, error: 'Not allowed by CORS' } };

export const regexForAny = (a: string) => new RegExp(a, 'gm');
