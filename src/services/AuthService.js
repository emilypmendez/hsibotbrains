// import { PolygonSDK } from '../utils/PolygonSDK';
// import {
//     AuthProvider,
//     useAuth,
//     useCurrentUser,
//     useLogin,
//     useSignUp,
//     useOtp,
//   } from '@saas-ui/auth'

// type CustomUser = {
//     email: string
// }

// export const createAuthService = (): AuthProviderProps<CustomUser> => {
//     // const polygonSDK = new PolygonSDK()
//     let user: CustomUser | null = null
    
//     return {
//       onLogin: async (params: AuthParams) => {
//         if (params.email) {
//           user = { email: params.email }
//           return user
//         }
//       },
//       onSignup: async (params: AuthParams) => {
//         if (params.email) {
//           user = { email: params.email }
//           return user
//         }
//       },
//       onVerifyOtp: async (params: AuthParams) => {
//         return true // check if params.otp is valid
//       },
//       onLogout: async () => {
//         user = null
//       },
//       onAuthStateChange: (callback) => {
//         // Set up and event handler that calls `callback(user)` with the
//         // current user or undefined if the user is logged out
//         return () => {
//           // Remove the event handler
//         }
//       },
//       onLoadUser: async () => {
//         return user
//       },
//       onGetToken: async () => {
//         // return a session token if it's supported.
//         return null
//       },
//       onResetPassword: async (params: AuthParams) => {
//         // send a reset password email
//       },
//       onUpdatePassword: async (params: AuthParams) => {
//         // update the user's password, eg after sending a reset password email
//       },
//     }
//   }

// export default function AuthService() {
//   static async login(email, password) {
//     // Implement login logic using PolygonSDK
//   }

//   static async register(email, password) {
//     // Implement registration logic using PolygonSDK
//   }

//   static async forgotPassword(email) {
//     // Implement forgot password logic using PolygonSDK
//   }
// }
