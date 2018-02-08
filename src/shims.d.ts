declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'knuth-shuffle' {
    export function knuthShuffle<T>(array: T[]): T[];
}