import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const m = h(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const n = c(), r = l ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 20.25a1.125 1.125 0 0 1-1.125 1.125H6.75a1.125 1.125 0 1 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125m2.25-7.5V15a1.125 1.125 0 0 1-1.125 1.125H5.725a4.1 4.1 0 0 1-3.95-2.94L.454 8.789A1.875 1.875 0 0 1 2.25 6.375H3c.298 0 .584.118.795.33l1.923 1.92H7.15l-.682-2.032A1.875 1.875 0 0 1 8.25 4.125H9c.298 0 .584.118.795.33l4.173 4.17H19.5a4.13 4.13 0 0 1 4.125 4.125m-2.25 0a1.875 1.875 0 0 0-1.875-1.875h-6c-.299 0-.585-.118-.796-.33L8.89 6.73l.888 2.665a1.125 1.125 0 0 1-1.068 1.48H5.25a1.13 1.13 0 0 1-.796-.33L2.85 8.94l1.079 3.6a1.865 1.865 0 0 0 1.796 1.335h15.65z" })
  ] });
});
m.displayName = "AirplaneInFlight";
export {
  m as AirplaneInFlight
};
//# sourceMappingURL=AirplaneInFlight.js.map
