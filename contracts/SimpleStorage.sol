pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function explode(uint y) public {
    storedData = y + 115792089237316195423570985008687907853269984665640564039457584007913129639935;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
