import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
describe("API test", async () => {
  await setup({
    // test context options
  });
  test("fetch word routes", async () => {
    const _data = await $fetch("/api/word");
    expect(_data).toBe(
      "This is a get request returning, resquested at path word"
    );
  });
});
