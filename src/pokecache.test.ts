import { Cache } from "./pokecache.js";
import { test, expect, vi } from "vitest";

test("Should cache and retrieve data", () => {
  const cache = new Cache(5000);

  try {
    cache.add("pokemon1", "pikachu");

    const result = cache.get<string>("pokemon1");

    expect(result).toBe("pikachu");
    expect(cache.get("unknown")).toBeUndefined();
  } finally {
    cache.stopReapLoop();
  }
});

test("Should remove expired entries", async () => {
  vi.useFakeTimers();

  const cache = new Cache(1000);

  try {
    cache.add("pokemon1", "pikachu");

    expect(cache.get("pokemon1")).toBe("pikachu");

    await vi.advanceTimersByTimeAsync(2000);

    expect(cache.get("pokemon1")).toBeUndefined();
  } finally {
    cache.stopReapLoop();
    vi.useRealTimers();
  }
});