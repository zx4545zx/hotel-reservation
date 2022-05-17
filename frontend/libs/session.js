export const sessionOptions = {
  password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD,
  cookieName: '_hotel',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
