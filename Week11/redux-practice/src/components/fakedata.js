import chance from 'chance';

export const fakeData = () => {
    const ch = chance();
    return ch.name({middle: true});
}
