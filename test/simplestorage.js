const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", accounts => {
  it("...should store the value 88.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of 88
    await simpleStorageInstance.set(88, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 88, "The value 88 was not stored.");
  });
});
