import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TvListApp} from '../app/tv-list';

beforeEachProviders(() => [TvListApp]);

describe('App: TvList', () => {
  it('should have the `defaultMeaning` as 42', inject([TvListApp], (app: TvListApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TvListApp], (app: TvListApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

