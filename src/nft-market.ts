import {NFTMarket, NFTTransfer as NFTTransferEvent,} from "../generated/NFTMarket/NFTMarket"
import { NFT } from "../generated/schema"



export function handleNFTTransfer(event: NFTTransferEvent): void {
  let entity = new NFT(event.params.tokenID.toString());
  
  entity.from = event.params.from
  entity.to = event.params.to
  entity.price = event.params.price
  const nftMarket=NFTMarket.bind(event.address);
  const tokenURI=nftMarket.tokenURI(event.params.tokenID);
  entity.tokenURI=tokenURI;

  entity.save()
}




