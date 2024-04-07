import { Box } from "@chakra-ui/react";
import { ConnectButton as RConnectButton } from "@rainbow-me/rainbowkit";

import { ConnectWalletBtn } from "./ConnectWalletBtn";
import { WrongNetworkBtn } from "./WrongNetworkBtn";
import { ChainButton } from "./ChainButton";
import { AccountButton } from "./AccountButton";

// TODO: make mobile responsive
export const ConnectButton = () => {
  return (
    <RConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready: boolean = mounted && authenticationStatus !== "loading"; // 表示组件是否已挂载并且认证状态不是 "loading"

        // 表示是否已连接钱包和链，并且认证状态为已认证或者没有认证状态
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return ready ? (
          <Box hidden={!ready}>
            {(() => {
              // 如果未连接，则渲染连接钱包按钮，点击时调用 openConnectModal 函数
              if (!connected) {
                return <ConnectWalletBtn onClick={openConnectModal} />;
              }
              // 如果链不受支持，则渲染错误网络按钮，点击时调用 openChainModal 函数
              if (chain.unsupported) {
                return <WrongNetworkBtn onClick={openChainModal} />;
              }

              return (
                <Box
                  display="flex"
                  py="0"
                  alignItems="center"
                  borderRadius="xl"
                >
                  <ChainButton onClick={openChainModal} chain={chain} />
                  <AccountButton onClick={openAccountModal} account={account} />
                </Box>
              );
            })()}
          </Box>
        ) : null;
      }}
    </RConnectButton.Custom>
  );
};
