import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, e) => {
  const n = h(), r = l ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 1 0-1.665 1.513l1.957 2.15a7.1 7.1 0 0 0-2.3 1.266 1.875 1.875 0 0 0-.15 2.788l4.262 4.262-3.732 3.732A1.127 1.127 0 1 0 5.3 20.297l3.731-3.732 4.263 4.262c.351.35.827.547 1.323.548q.066.001.132-.005a1.88 1.88 0 0 0 1.365-.745 9 9 0 0 0 .895-1.45l1.66 1.827a1.125 1.125 0 1 0 1.666-1.513zm9.233 15.926L5.07 9.423c.743-.517 1.522-.787 2.328-.814l7.923 8.718a5.8 5.8 0 0 1-.755 1.592m7.76-8.906-3.655 3.667a1.13 1.13 0 0 1-1.592.002 1.125 1.125 0 0 1-.002-1.591l3.393-3.404-5.157-5.156-3.07 3.078a1.125 1.125 0 0 1-1.594-1.588l3.335-3.346a1.876 1.876 0 0 1 2.653 0l5.69 5.689a1.875 1.875 0 0 1 0 2.65z" })
  ] });
});
m.displayName = "PushPinSlash";
export {
  m as PushPinSlash
};
//# sourceMappingURL=PushPinSlash.js.map
