// import { NextResponse } from 'next/server';
// import { isAuthenticated } from '@lib/auth';
 
// // Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: '/api/:function*',
// };
 
// export function middleware(request) {
//     if(mongoose.connection.readyState){
//         return mongoose.connection;
//     }
//     return  mongoose.connect(process.env.DB_URL)
// }