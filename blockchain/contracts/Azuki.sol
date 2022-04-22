pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract Azuki is ERC721A {
    string public baseURI =
        "https://ipfs.io/ipfs/Qmbtm38f8v8MfGwYc7WHdzNPENhoVNzVQgNcQyyDJYYgk6/";

    constructor() ERC721A("Azuki", "AZUKI") {}

    function mint(uint256 quantity) external {
        _safeMint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}
