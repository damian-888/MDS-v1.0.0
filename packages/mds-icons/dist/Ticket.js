import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, a) => {
  const l = h(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.75 10.125A1.125 1.125 0 0 0 22.875 9V6A1.875 1.875 0 0 0 21 4.125H3A1.875 1.875 0 0 0 1.125 6v3a1.125 1.125 0 0 0 1.125 1.125 1.875 1.875 0 1 1 0 3.75A1.125 1.125 0 0 0 1.125 15v3A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18v-3a1.125 1.125 0 0 0-1.125-1.125 1.875 1.875 0 1 1 0-3.75M3.375 15.969a4.126 4.126 0 0 0 0-7.938V6.375H8.25v11.25H3.375zm17.25 0v1.656H10.5V6.375h10.125v1.656a4.125 4.125 0 0 0 0 7.938" })
  ] });
});
s.displayName = "Ticket";
export {
  s as Ticket
};
//# sourceMappingURL=Ticket.js.map
