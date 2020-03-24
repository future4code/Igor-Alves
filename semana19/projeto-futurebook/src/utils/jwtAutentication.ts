import * as jwt from "jsonwebtoken";

export class JWTAutentication {
    generateToken(userId: string) {
        return jwt.sign({userId}, process.env.JWT_KEY as string, {expiresIn: '1h'})
    }

    verifyToken(token: string) {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as {userId: string}

        return data.userId
    }
}