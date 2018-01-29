import { baseN } from 'js-combinatorics';

export const numbers = [1, 2, 3];
export const colors = ['red', 'green', 'blue'];
export const shapes = ['pill', 'diamond', 'wave'];
export const fills = ['solid', 'empty', 'stripes'];

export const attributes = [numbers, colors, shapes, fills];

/**
 * 4 attributes, each of 3 options.
 * the deck is all possible combinations of those attributes, i.e. 3^4.
 * each card is array of 4 numbers.
 * The index is an attribute; the value is option.
 */
export const deck = baseN([0, 1, 2], 4).toArray();
