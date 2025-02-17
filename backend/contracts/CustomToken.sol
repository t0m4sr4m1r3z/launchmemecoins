// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    uint256 public transactionFee;
    address public owner;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply,
        uint256 _transactionFee
    ) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * 10**18;
        transactionFee = _transactionFee;
        owner = msg.sender;
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "Saldo insuficiente");
        uint256 fee = (amount * transactionFee) / 100;
        uint256 amountAfterFee = amount - fee;

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amountAfterFee;
        balanceOf[owner] += fee;

        emit Transfer(msg.sender, to, amountAfterFee);
        emit Transfer(msg.sender, owner, fee);
    }
}