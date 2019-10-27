import expect from "expect"
import router from "../src/index"

import listener from "@listener-js/listener"

beforeEach(() => {
  listener.load(["beforeEach"], { router })
})

it("routes", () => {
  router.add({
    "404": () => "404",
    route: () => "route",
  })
  expect(router.route("/route")).toBe("route")
  expect(router.route("/no-exist")).toBe("404")
})
