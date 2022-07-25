import React, { useState } from "react";
import RTCP from "../../abi/RTCP.json";
import Swap from "../../abi/Swap.json";
import { ethers } from "ethers";
const RTCP_Address = "0xbafc67357ad8e7ee7aaacac8d13b2e40d823c5b4";
const Swap_Address = "0x3b6f4f4eb3bb7cd26a94e51b393f8d78a121c05c";
// const provider = process.env.REACT_APP_RPC_URL;

const RTCP_abi = RTCP.abi;
const Swap_abi = Swap.abi;
const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);

function Activity() {
  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  // const [RTCP_Contract, setRTCP_Contract] = useState();

  const handleApproveAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleApproveAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
  };

  const getBalance = async () => {
    const balance = await provider.getBalance(RTCP_Address);
    ethers.utils.formatEther(balance);
  };

  let sendTransaction = async () => {
    const RTCP_Contract = new ethers.Contract(RTCP_Address, RTCP_abi, provider);
    const myAddress = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(RTCP_Contract);
    // setRTCP_Contract(RTCP_Contract);
    // const amount = setAmount(e.target.value);
  };
  sendTransaction();

  // let x = async () => {
  //   let a = await RTCP_Contract.functions.name();
  //   console.log(a);
  // };
  // x();
  return (
    <div>
      <div className="card-header">
        <h5 className="header-title mt-0">Activity</h5>
      </div>
      <div className="card-body" onSubmit={handleDepositSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="address"
            required=""
            placeholder="Spender_address"
            name="address"
            onChange={handleApproveAddress}
            value={address}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="amount"
            pattern="[0-9]*"
            required="number"
            placeholder="amount"
            name="amount"
            onChange={handleApproveAmount}
            value={amount}
          />
        </div>
        <button
          className="btn btn-danger btn-block waves-effect waves-light"
          type="submit"
          // onClick={() => RTCP_Contract.approve()}
        >
          Approve
        </button>
      </div>
    </div>
  );
}

export default Activity;
