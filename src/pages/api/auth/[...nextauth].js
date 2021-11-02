import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '456966394596-mhno2i8it5k02vosj8f6okm6jut4b823.apps.googleusercontent.com',
      clientSecret: '456966394596-mhno2i8it5k02vosj8f6okm6jut4b823.apps.googleusercontent.com',
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
})