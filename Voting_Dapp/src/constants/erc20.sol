<<<<<<< HEAD
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
=======
// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf

contract VKToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("VKToken", "VK") {
        _mint(msg.sender, initialSupply);
    }
<<<<<<< HEAD
=======

>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf
}
