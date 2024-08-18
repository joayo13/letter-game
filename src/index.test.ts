import { describe, it, expect } from 'vitest';
import { shiftLetterOneForward, shiftLetterOneBackward } from '../src/functions/gameFunctions'
describe('shiftLetterOneForward', () => {
  it('should shift letter b to c', () => {
    expect(shiftLetterOneForward(['b'])).toEqual(['c']);
  });

  it('should shift letter z to a', () => {
    expect(shiftLetterOneForward(['z'])).toEqual(['a']);
  });

  it('should shift an array with multiple letters', () => {
    expect(shiftLetterOneForward(['a', 'z'])).toEqual(['a', 'a']);
  });
});

describe('shiftLetterOneBackward', () => {
  it('should shift letter c to b', () => {
    expect(shiftLetterOneBackward(['c'])).toEqual(['b']);
  });

  it('should shift letter a to z', () => {
    expect(shiftLetterOneBackward(['a'])).toEqual(['z']);
  });

  it('should shift an array with multiple letters', () => {
    expect(shiftLetterOneBackward(['a', 'b'])).toEqual(['a', 'a']);
  });
});