import { baseN } from 'js-combinatorics';
import { knuthShuffle } from 'knuth-shuffle';

export const numbers = [1, 2, 3];
export const colors = ['red', 'green', 'blue'];
export const shapes = ['pill', 'diamond', 'wave'];
export const fills = ['solid', 'empty', 'stripes'];

export const numberOfOptionsPerAttribute = numbers.length;

export const attributes = [numbers, colors, shapes, fills];

export const numberOfAttributes = attributes.length;

// source of truth
export const cardArrays = baseN(Array.from(Array(numberOfOptionsPerAttribute).keys()), numberOfAttributes).toArray();

export const numberOfCards = cardArrays.length;

// [0, 1, ..., numberOfCards - 1]
export const deck = knuthShuffle(Array.from(Array(numberOfCards).keys()));

export const cardObjects = cardArrays.map(c => ({
    number: numbers[c[0]],
    color: colors[c[1]],
    shape: shapes[c[2]],
    fill: fills[c[3]]
}));

// @TODO: finish this
export const isSet = set => set.length === 3
    && set[0]