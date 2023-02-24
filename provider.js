import { ethers } from "./node_modules/ethers/dist/ethers.esm.min.js";
let provider;
let signer;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
async function connect() {
  await ethereum.request({method: "eth_requestAccounts"});
	provider = new ethers.providers.Web3Provider(window.ethereum);
	signer = provider.getSigner();
  btn1.innerText = `Connected`;
}
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "buyCoffee",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "NewMemo",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdrawTips",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMemos",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct BuyMeACoffee.Memo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
async function buy() {
  const address = "0x7268979F222BFd0C2d31160a7B2efD2AFDb0C4CF";
	//"0xddedfe6b66cc4e2022f4b4312be93103a917bc16";
  const contract = new ethers.Contract(address, abi, signer);
	const currentAddress = await signer.getAddress();
	const transaction = await contract.buyCoffee("Summa", "thanks for everything!",{
		value: ethers.utils.parseEther("0.1"),
	});
	console.log(currentAddress);
	const withdrawnTransaction = await contract.withdrawTips();
	await transaction.wait();
	console.log(`tips withdrawn: ${withdrawnTransaction.hash}`);
}

export { connect, buy };