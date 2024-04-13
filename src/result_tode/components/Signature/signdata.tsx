import React, { useState } from 'react';
import * as ethereumjsUtil from 'ethereumjs-util';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButtonPro";

const SignSourceDataComponent: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [PKey, setPKey] = useState<string>('');
  const [messageHash, setMessageHash] = useState<string>('');
  const [signature, setSignature] = useState<{ v: number; r: string; s: string } | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleSign = () => {
    if (text && PKey) {
      const privateKey = Buffer.from(PKey, 'hex');
      const bufferMessage = Buffer.from(text);
      const messageHash = ethereumjsUtil.keccak256(bufferMessage);
      const signature = ethereumjsUtil.ecsign(messageHash, privateKey);
      const formattedSignature = {
        v: signature.v,
        r: ethereumjsUtil.bufferToHex(signature.r),
        s: ethereumjsUtil.bufferToHex(signature.s),
      };

      setMessageHash(ethereumjsUtil.bufferToHex(messageHash));
      setSignature(formattedSignature);
    }
    setClicked(true);
  };

  return (
    <>
    <Heading color={"custom.pale"}>EcRecoverSign</Heading>
    <Table mt={"3rem"} variant={"unstyled"}>
        <Tbody>
        <Tr>
            <Label>Text</Label>
            <Td>
            <InputField
                autoFocus
                type="string"
                placeholder="text"
                onChange={(e) => setText(e.target.value)}
            />
            </Td>
        </Tr>
        <Tr>
            <Label>PrivateKey</Label>
            <Td>
            <InputField
                type="string"
                placeholder="PrivateKey"
                onChange={(e) =>
                  setPKey(e.target.value)
                }
            />
            </Td>
        </Tr>   
        <Tr style={{ display: 'flex', justifyContent: 'center' }}>
            <MyButton onClick={handleSign} buttonText="Sign"/>
        </Tr>

        {/** 如下是返回内容 */}
        {clicked && (
          <>
            <h2>Message Hash:</h2>
            <p>{messageHash}</p>
            <h2>Signature:</h2>
            <p>v: {signature?.v}</p>
            <p>r: {signature?.r}</p>
            <p>s: {signature?.s}</p>
          </>
        )}
        </Tbody>
    </Table>
    </>
  );
};

export default SignSourceDataComponent;