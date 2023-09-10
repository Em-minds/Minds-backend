import JWT from "jsonwebtoken";

const { SECRET_KEY } = process.env

export const signToken = user => {
    return JWT.sign({
        iss: 'Mind',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getTime() + 1)
    }, SECRET_KEY);
}