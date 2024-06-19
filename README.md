#### How To Use

1. Clone the project

    ```shell
    git clone https://github.com/LBiyou/Treasure-Chest.git
    ```

2. Install Dependencies

    ```shell
    pnpm i
    ```

3. Copy `.env.example` to `.env.local` and fill in the required values. This step is critical, otherwise an error will be reported.

4. Run locally

    ```shell
    pnpm dev
    ```

5. Visit [http://localhost:3000/](http://localhost:3000/)

#### Tool Description

1. Constants： Provides some common constants for solidity smart contracts, such as type(uint256), zero address, etc.

2. Epoch Converter：Get a unix timestamp, get a timestamp `x` minutes/hours/days in the future, or convert a timestamp to a human-readable format.

3. Converter：Implement data conversion.

    - ETH： Ether unit conversion.
    - Hexadecimal： Base conversion.
    - Keccak256： Data hash operation.
    - Padding：Data shifting.
    - Address checksum：Format the address.

4. Transact： Send a raw data transaction.

5. Calldata：Encode and decode data.

    - decode：Decode data such as ABI, address, tx, etc.

    - encode：Developing...

6. Storage Slots：Implement contract slot query under the specified network.

7. Character Counter：The number of statistical data.

8. Signature：Sign the message.

    - Batch Sign：Multiple signatures，The same message gets different signatures.
    - EcRecoverSign：Sign the message, and decompose the signature.
    - SignData：Follow the EIP191 protocol signature.

9. AccountCreate：Beautiful account generator (generate EOA account).

10. CalAddressByCreate2：Use create2 to calculate the contract address in advance (common function).

11. PriKeyToPubKey：The private key is converted into a public key.
