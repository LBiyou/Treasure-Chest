import React, { useState } from 'react';
import secp256k1 from 'secp256k1';
import { randomBytes } from 'crypto';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";

type Signature = {
    signatureHex: string;
    r: string;
    s: string;
};

function batchSign(numSignatures: number, PKey: string, MessageHash: string): Signature[] {
    const privateKey = Buffer.from(PKey, 'hex');
    const messageHash = Buffer.from(MessageHash, 'hex');
    const signatures: Signature[] = [];

    for (let i = 0; i < numSignatures; i++) {
        const { signature } = secp256k1.ecdsaSign(messageHash, privateKey, { data: randomBytes(32) });
        const signatureBytes = Buffer.from(signature);
        const signatureHex = signatureBytes.toString('hex');
        const r = signatureHex.slice(0, 64);
        const s = signatureHex.slice(64, 128);
        signatures.push({ signatureHex, r, s });
    }

    return signatures;
}

interface SignatureGeneratorProps {
    defaultNumSignatures?: number;
    defaultPKey?: string;
    defaultMessageHash?: string;
}

const SignatureGenerator: React.FC<SignatureGeneratorProps> = ({ defaultNumSignatures = 0, defaultPKey = '', defaultMessageHash = '' }) => {
    const [numSignatures, setNumSignatures] = useState<number>(defaultNumSignatures);
    const [PKey, setPKey] = useState<string>(defaultPKey);
    const [MessageHash, setMessageHash] = useState<string>(defaultMessageHash);
    const [signatures, setSignatures] = useState<Signature[]>([]);

    const handleGenerate = () => {
        const newSignatures = batchSign(numSignatures, PKey, MessageHash);
        setSignatures(newSignatures);
    };

    return (

        <>
        <Heading color={"custom.pale"}>Batch Sign</Heading>
      <Table mt={"3rem"} variant={"unstyled"}>
        <Tbody>
          <Tr>
            <Label>numSignatures</Label>
            <Td>
              <InputField
                autoFocus
                type="number"
                placeholder="numSignatures"
                onChange={(e) => setNumSignatures(Number(e.target.value))}
              />
            </Td>
          </Tr>
          <Tr>
            <Label>privateKey</Label>
            <Td>
              <InputField
                type="string"
                placeholder="privateKey"
                onChange={(e) =>
                    setPKey(e.target.value)
                }
              />
            </Td>
          </Tr>
          <Tr>
            <Label>MessageHash</Label>
            <Td>
              <InputField
                type="string"
                placeholder="MessageHash"
                onChange={(e) =>
                    setMessageHash(e.target.value)
                }
              />
            </Td>
          </Tr>
          <Tr style={{ display: 'flex', justifyContent: 'center' }}>
            <MyButton onClick={handleGenerate}/>
          </Tr>
          <Tr>
          <ul>
            {signatures.map((sig, index) => (
                <li key={index}>
                    <h2>Signature {index + 1}:</h2>
                    <div style={{ maxWidth: '600px' }}>
                        <p>Signature: {sig.signatureHex}</p>
                        <p>Signature (r): {sig.r}</p>
                        <p>Signature (s): {sig.s}</p>
                    </div>
                </li>
            ))}
        </ul>
          </Tr>
        </Tbody>
      </Table>
     

        </>
        // <div>
        //     <input type="number" value={numSignatures} onChange={(e) => setNumSignatures(Number(e.target.value))} placeholder="Number of Signatures" />
        //     <input type="text" value={PKey} onChange={(e) => setPKey(e.target.value)} placeholder="Private Key" />
        //     <input type="text" value={MessageHash} onChange={(e) => setMessageHash(e.target.value)} placeholder="Message Hash" />
        //     <button onClick={handleGenerate}>Generate Signatures</button>
        //     {signatures.map((sig, index) => (
        //         <div key={index}>
        //             <p>Signature {index + 1}:</p>
        //             <p>Signature: {sig.signatureHex}</p>
        //             <p>Signature (r): {sig.r}</p>
        //             <p>Signature (s): {sig.s}</p>
        //         </div>
        //     ))}
        // </div>
    );
};

export default SignatureGenerator;