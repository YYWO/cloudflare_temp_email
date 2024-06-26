export type Bindings = {
    // bindings
    DB: D1Database
    KV: KVNamespace
    RATE_LIMITER: any
    SEND_MAIL: any

    // config
    TITLE: string | undefined
    PREFIX: string | undefined
    DOMAINS: string | string[] | undefined
    PASSWORDS: string | string[] | undefined
    ADMIN_PASSWORDS: string | string[] | undefined
    JWT_SECRET: string
    BLACK_LIST: string | undefined
    ENABLE_AUTO_REPLY: string | boolean | undefined
    ENABLE_WEBHOOK: string | boolean | undefined
    ENABLE_USER_CREATE_EMAIL: string | boolean | undefined
    ENABLE_USER_DELETE_EMAIL: string | boolean | undefined
    ENABLE_INDEX_ABOUT: string | boolean | undefined
    DEFAULT_SEND_BALANCE: number | string | undefined
    ADMIN_CONTACT: string | undefined
    COPYRIGHT: string | undefined

    // dkim
    DKIM_SELECTOR: string | undefined
    DKIM_PRIVATE_KEY: string | undefined

    // cf turnstile
    CF_TURNSTILE_SITE_KEY: string | undefined
    CF_TURNSTILE_SECRET_KEY: string | undefined

    // resend
    RESEND_TOKEN: string | undefined
    [key: `RESEND_TOKEN_${string}`]: string | undefined;

    // telegram config
    TELEGRAM_BOT_TOKEN: string
    TG_MAX_ADDRESS: number | undefined
}

type JwtPayload = {
    address: string
    address_id: number
}

type UserPayload = {
    user_email: string
    user_id: number
    exp: number
    iat: number
}

type Variables = {
    userPayload: UserPayload,
    jwtPayload: JwtPayload
}

type HonoCustomType = {
    "Bindings": Bindings;
    "Variables": Variables;
}
