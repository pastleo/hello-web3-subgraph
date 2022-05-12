import { BigInt } from "@graphprotocol/graph-ts"
import { /* Greeter, */ Greeted } from "../generated/Greeter/Greeter"
import { Global } from "../generated/schema"

const GLOBAL_ID = "only";
export function handleGreeted(event: Greeted): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let globalEntity = Global.load(GLOBAL_ID);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!globalEntity) {
    globalEntity = new Global(GLOBAL_ID);

    // Entity fields can be set using simple assignments
    globalEntity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  globalEntity.count.plus(BigInt.fromI32(1));

  // Entity fields can be set based on event parameters
  globalEntity.from = event.params.from;
  globalEntity.latestMessage = event.params.greeting;

  // Entities can be written to the store with `.save()`
  globalEntity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.greet(...)
}
