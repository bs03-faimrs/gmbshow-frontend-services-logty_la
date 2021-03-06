import { defineParameterType } from "cucumber"

defineParameterType({
  regexp: /(\w+)page/,
  //typescript requires transformer propertu
  transformer: s => s,
  name: "webpage"
})

defineParameterType({
  regexp: /(\w+)$/,
  transformer: s => s,
  name: "component"
})

defineParameterType({
  regexp: /(\w+)s$/,
  transformer: s => s,
  name: "components"
})
