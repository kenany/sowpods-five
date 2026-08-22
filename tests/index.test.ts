import { sowpodsFive } from 'sowpods-five';
import { describe, expect, it } from 'vitest';

describe('sowpodsFive', () => {
  it('is an array of 5-letter words', () => {
    expect(Array.isArray(sowpodsFive)).toBe(true);
    expect(sowpodsFive.length).toBeGreaterThan(0);
    expect(sowpodsFive.every((word) => word.length === 5)).toBe(true);
  });
});
