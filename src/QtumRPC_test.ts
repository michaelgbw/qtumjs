import "mocha"

import { assert } from "chai"

import { rpc, assertThrow } from "./test"

// import { } from "mocha"
describe("QtumRPC", () => {
  it("can make RPC call", async () => {
    const info = await rpc.rawCall("getinfo")
    assert.isNotEmpty(info)
    assert.hasAllKeys(info, [
      "version",
      "protocolversion",
      "walletversion",
      "balance",
      "stake",
      "blocks",
      "timeoffset",
      "connections",
      "proxy",
      "difficulty",
      "testnet",
      "moneysupply",
      "keypoololdest",
      "keypoolsize",
      "paytxfee",
      "relayfee",
      "errors",
    ])
  })

  it("throws error if method is not found", async () => {
    await assertThrow(async () => {
      return rpc.rawCall("unknown-method")
    })
  })
})
