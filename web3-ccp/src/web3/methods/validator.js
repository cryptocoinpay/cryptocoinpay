var utils = require("web3/lib/utils/utils")
var Property = require("web3/lib/web3/property")
var Method = require("web3/lib/web3/method")
var formatters = require("../formatters")

var Validator = function(web3) {
  this._requestManager = web3._requestManager

  var self = this
  methods().forEach(function(method) {
    method.attachToObject(self)
    method.setRequestManager(self._requestManager)
  })

  properties().forEach(function(p) {
    p.attachToObject(self)
    p.setRequestManager(self._requestManager)
  })
}

var methods = function() {
  var declare = new Method({
    name: "declare",
    call: "bob_declareCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var withdraw = new Method({
    name: "withdraw",
    call: "bob_withdrawCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var update = new Method({
    name: "update",
    call: "bob_updateCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var verify = new Method({
    name: "verify",
    call: "bob_verifyCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var activate = new Method({
    name: "activate",
    call: "bob_activateCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var deactivate = new Method({
    name: "deactivate",
    call: "bob_deactivateCandidacy",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var updateAccount = new Method({
    name: "updateAccount",
    call: "bob_updateCandidacyAccount",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var acceptAccountUpdate = new Method({
    name: "acceptAccountUpdate",
    call: "bob_acceptCandidacyAccountUpdate",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })
  var setCompRate = new Method({
    name: "setCompRate",
    call: "bob_setCompRate",
    params: 1,
    inputFormatter: [formatters.inputStakeTxFormatter]
  })

  var list = new Method({
    name: "list",
    call: "bob_queryValidators",
    params: 1,
    inputFormatter: [formatters.inputDefaultHeightFormatter]
  })
  var query = new Method({
    name: "query",
    call: "bob_queryValidator",
    params: 2,
    inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultHeightFormatter]
  })
  var queryAwardInfos = new Method({
    name: "queryAwardInfos",
    call: "bob_queryAwardInfos",
    params: 1,
    inputFormatter: [formatters.inputDefaultHeightFormatter]
  })

  return [
    declare,
    withdraw,
    update,
    verify,
    activate,
    deactivate,
    setCompRate,
    updateAccount,
    acceptAccountUpdate,
    list,
    query,
    queryAwardInfos
  ]
}

var properties = function() {
  return []
}

module.exports = Validator
