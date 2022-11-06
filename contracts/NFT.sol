// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract GameItem is ERC721 {
    uint private _tokenIds;
    string private baseURI;

    constructor(string memory baseURI_) ERC721("GameItem", "ITM") {
        baseURI = baseURI_;
    }

    function mint(address to) public returns (uint256) {
        _tokenIds ++ ;
        _mint(to, _tokenIds);
        return _tokenIds;
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return baseURI;
    }
}