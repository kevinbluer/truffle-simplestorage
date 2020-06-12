const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    teams: {
      url: `ws://marshmallow:8002/77f042b1-a657-49d2-b5eb-1d8facbcb333`,
      network_id: "*",
      gas: 5500000
    }
  }
};
