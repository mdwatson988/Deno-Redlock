import { connect } from "./deps.ts"
import Redlock from './redlock.ts'


const redis = await connect({hostname: "127.0.0.1", port: 6379})

const redlock = new Redlock(redis)

console.log('redlock instance1:', redlock);
redlock.using(["bdc4076d8604a493c324292b57ed3c3f00797f8d"], 10000, async (signal) => {
    await redis.set("key", "test1");

    if (signal.aborted) {
        throw signal.error;
    }
})