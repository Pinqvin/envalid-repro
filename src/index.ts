import { cleanEnv, json, makeValidator } from "envalid"

const custom = makeValidator((input): object => JSON.parse(input))

const env = cleanEnv(process.env, {
    TEST: json({
        default: "{}",
    }),
    TEST_CUSTOM: custom({
        default: "{}" as any
    })
});

if (require.main === module) {
    console.log(`typeof env.TEST: ${typeof env.TEST}`);

    console.log(`typeof env.TEST_CUSTOM: ${typeof env.TEST_CUSTOM}`);
}