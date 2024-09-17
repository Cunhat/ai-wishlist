import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { currentUser } from '@clerk/nextjs/server'


export const authenticatedActionClient = createSafeActionClient({
    
    handleServerError(e) {
        // Log to console.
            console.error("Action error:", e.message);
        // Every other error that occurs will be masked with the default message.

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(async ({ next, clientInput, metadata }) => {

    console.log("LOGGING MIDDLEWARE");
  
    const user = await currentUser()

    if(!user) {
        throw new Error("User not found")
    }
    // console.log("Client input ->", clientInput);
    // console.log("Metadata ->", metadata);
    // console.log("Action execution took", endTime - startTime, "ms");
  
    // And then return the result of the awaited action.
    return next({ ctx: { user } });;
  });