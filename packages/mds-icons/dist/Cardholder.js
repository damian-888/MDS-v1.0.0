import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: d = "1em",
  title: r,
  titleId: e,
  ...h
}, i) => {
  const l = m(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 4.125h-15A2.625 2.625 0 0 0 1.875 6.75v10.5A2.625 2.625 0 0 0 4.5 19.875h15a2.625 2.625 0 0 0 2.625-2.625V6.75A2.625 2.625 0 0 0 19.5 4.125m-15 2.25h15a.375.375 0 0 1 .375.375v1.5H15a1.125 1.125 0 0 0-1.125 1.125 1.875 1.875 0 1 1-3.75 0A1.125 1.125 0 0 0 9 8.25H4.125v-1.5a.375.375 0 0 1 .375-.375m15 11.25h-15a.375.375 0 0 1-.375-.375V10.5h3.906a4.125 4.125 0 0 0 7.938 0h3.906v6.75a.375.375 0 0 1-.375.375" })
  ] });
});
s.displayName = "Cardholder";
export {
  s as Cardholder
};
//# sourceMappingURL=Cardholder.js.map
