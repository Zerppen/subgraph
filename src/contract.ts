import {
  LogAnySwapIn as LogAnySwapInEvent,
  LogAnySwapOut as LogAnySwapOutEvent,
  LogAnySwapTradeTokensForNative as LogAnySwapTradeTokensForNativeEvent,
  LogAnySwapTradeTokensForTokens as LogAnySwapTradeTokensForTokensEvent
} from "../generated/Contract/Contract"
import {
  LogAnySwapIn,
  LogAnySwapOut,
  LogAnySwapTradeTokensForNative,
  LogAnySwapTradeTokensForTokens
} from "../generated/schema"
import {Bytes} from "@graphprotocol/graph-ts";


export function handleLogAnySwapIn(event: LogAnySwapInEvent): void {
  let entity = new LogAnySwapIn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txhash = event.params.txhash
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogAnySwapOut(event: LogAnySwapOutEvent): void {
  let entity = new LogAnySwapOut(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogAnySwapTradeTokensForNative(
  event: LogAnySwapTradeTokensForNativeEvent
): void {
  let entity = new LogAnySwapTradeTokensForNative(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.path = event.params.path.map<Bytes>((target: Bytes) => target)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amountIn = event.params.amountIn
  entity.amountOutMin = event.params.amountOutMin
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogAnySwapTradeTokensForTokens(
  event: LogAnySwapTradeTokensForTokensEvent
): void {
  let entity = new LogAnySwapTradeTokensForTokens(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.path = event.params.path.map<Bytes>((target: Bytes) => target)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amountIn = event.params.amountIn
  entity.amountOutMin = event.params.amountOutMin
  entity.fromChainID = event.params.fromChainID
  entity.toChainID = event.params.toChainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
