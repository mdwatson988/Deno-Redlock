import { connect } from "./deps.ts"
import Redlock from './redlock.ts'


const redis = await connect({hostname: "127.0.0.1", port: 6379})

const redlock = new Redlock(redis)

redlock.using(["85b5b0fb126fe43d052651539fd18eeb0e94576b"], 10000, async (signal) => {
    await redis.set("key1", "test2");
    console.log('finished calling redis.set as the callback routine in test file')

    if (signal.aborted) {
        throw signal.error;
    }
})