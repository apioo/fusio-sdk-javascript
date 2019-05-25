interface Body {
    iss: string,
    sub: string,
    iat: string,
    exp: string,
    name: string
}

export class Token {
    public static decode(token: string): Body|false {
        if (!token) {
            return false;
        }

        let parts = token.split(".");
        if (parts.length >= 2) {
            let body = JSON.parse(atob(parts[1]));

            if (Math.floor(Date.now() / 1000) > body.exp) {
                return false;
            }

            return body;
        } else {
            return false;
        }
    }
}
