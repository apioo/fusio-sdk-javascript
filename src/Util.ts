
export default class Util {
    public static normalizeBaseUrl(baseUrl: string) {
        if (baseUrl.charAt(baseUrl.length - 1) == '/') {
            return baseUrl.substr(0, baseUrl.length - 1);
        } else {
            return baseUrl;
        }
    }
}
