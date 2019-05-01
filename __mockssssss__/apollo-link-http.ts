const mock = jest.fn()

export default mock;


// const mockPlaySoundFile = jest.fn();
jest.mock('HttplinkOptions', () => {
  return jest.fn().mockImplementation(() => {
    return {uri:""};
  });
});