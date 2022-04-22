// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import { VStack, Heading, Box } from "@chakra-ui/layout"
import ConnectMetamask from 'components/ConnectMetamask'
import ETHBalanceSWR from 'components/ETHBalanceSWR'
import ReadERC721 from 'components/ReadERC721'
import MintNFT from 'components/MintNFT'
import { addressNFTContract, addressMarketContract } from '../projectsetting'
import ReadNFTMarket from 'components/ReadNFTMarket'
import { app, database } from 'firebase.config';

const Home: NextPage = () => {
  console.log("app", app, "database", database);
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>

      <Heading as="h3" my={4}>NFT Marketplace</Heading>
      <ConnectMetamask />

      <VStack>
        <Box my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>Azuki: NFT Smart Contract Info</Heading>
          <ReadERC721 addressContract={addressNFTContract} />
          <MintNFT />
        </Box>


        {/* <CreateNFT /> */}



        {/* <Box mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>NFT Market - My NFTs</Heading>
          <ReadNFTMarket option={0} />
        </Box> */}

        {/* 
        <Box mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>NFT Market - all</Heading>
          <ReadNFTMarket option={1} />
        </Box>

        <Box mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>NFT Market - my brought</Heading>
          <ReadNFTMarket option={2} />
        </Box>
        */}


        <Box mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>ETH Balance </Heading>
          <ETHBalanceSWR />
        </Box>
      </VStack>
    </>
  )
}

export default Home
