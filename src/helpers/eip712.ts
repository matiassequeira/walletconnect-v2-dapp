const example = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    Permit: [
      {
        name: "holder",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
      {
        name: "nonce",
        type: "uint256",
      },
      {
        name: "expiry",
        type: "uint256",
      },
      {
        name: "allowed",
        type: "bool",
      },
    ]
  },
  domain: {
    name: "Dai Stablecoin",
    version: "1",
    chainId: 1,
    verifyingContract: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
  primaryType: "Permit",
  message: {
  },
};

export const eip712 = {
  example,
};