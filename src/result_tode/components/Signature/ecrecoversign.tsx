import React, { useState } from 'react';
import Web3 from 'web3';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";

const EcRecoverSign: React.FC = () => {
    const [privateKey, setPrivateKey] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [signature, setSignature] = useState<any>(null);

    const web3 = new Web3();

    const handleSign = () => {
        const sign = web3.eth.accounts.sign(message, privateKey);
        setSignature(sign);
    };

    return (

        <>
            <Heading color={"custom.pale"}>EcRecoverSign</Heading>
            <Table mt={"3rem"} variant={"unstyled"}>
                <Tbody>
                <Tr>
                    <Label>PrivateKey</Label>
                    <Td>
                    <InputField
                        autoFocus
                        type="string"
                        placeholder="PrivateKey"
                        onChange={(e) => setPrivateKey(e.target.value)}
                    />
                    </Td>
                </Tr>
                <Tr>
                    <Label>Message</Label>
                    <Td>
                    <InputField
                        type="string"
                        placeholder="Message"
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                    />
                    </Td>
                </Tr>   
                <Tr style={{ display: 'flex', justifyContent: 'center' }}>
                    <MyButton onClick={handleSign} buttonText="Sign"/>
                </Tr>

                {signature && (
    <>
        <h2>Signature:</h2>
        <p>Message: {signature.message}</p>
        <p>Message Hash: {signature.messageHash}</p>
        <p>v: {signature.v}</p>
        <p>r: {signature.r}</p>
        <p>s: {signature.s}</p>
        <p>Signature: {signature.signature}</p>
    </>
)}

                        
                </Tbody>
            </Table>
                </>



        // <div>
        //     <input 
        //         type="text" 
        //         placeholder="Private Key" 
        //         value={privateKey} 
        //         onChange={e => setPrivateKey(e.target.value)} 
        //     />
        //     <input 
        //         type="text" 
        //         placeholder="Message" 
        //         value={message} 
        //         onChange={e => setMessage(e.target.value)} 
        //     />
        //     <button onClick={handleSign}>Sign</button>
        //     {signature && (
        //         <>
        //             <h2>Signature:</h2>
        //             <p>{JSON.stringify(signature, null, 2)}</p>
        //         </>
        //     )}
        // </div>
    );
};

export default EcRecoverSign;