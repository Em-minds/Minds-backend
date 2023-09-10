import { authRouter } from './auth.router.mjs';
import router from './mail.router.mjs';

export default {
    waitlist: router,
    auth: authRouter,
}
