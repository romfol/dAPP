import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { addressNFTContract } from '../projectsetting'

export default function MintNFT() {
    const { library } = useWeb3React<Web3Provider>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [NFTamount, setNFTamount] = useState<Number>(1);
    const cancelRef = React.useRef();

    async function mintNFT() {
        const abiJSON = require("abi/Azuki.json")
        const nft: Contract = new Contract(addressNFTContract, abiJSON.abi, library?.getSigner())
        await nft.mint(NFTamount)
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen}>Mint NFT</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                // @ts-ignore: Unreachable code error
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Mint NFTs?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        <Text>How many NFTs wish to mint?</Text>
                        {/*@ts-expect-error: Let's ignore a compile error like this unreachable code*/}
                        <NumberInput step={1} defaultValue={1} min={1} max={16} onChange={setNFTamount}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        {/*@ts-expect-error: Let's ignore a compile error like this unreachable code*/}
                        <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button ml={3} onClick={mintNFT}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}


