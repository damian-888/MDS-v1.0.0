import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = m(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.643 10.242-5.782-2.103-2.103-5.783a1.871 1.871 0 0 0-3.516 0L8.14 8.14l-5.782 2.103a1.871 1.871 0 0 0 0 3.515l5.782 2.103 2.103 5.783a1.87 1.87 0 0 0 3.516 0l2.103-5.783 5.782-2.103a1.87 1.87 0 0 0 0-3.515M14.6 13.925a1.13 1.13 0 0 0-.673.673L12 19.894l-1.926-5.296a1.12 1.12 0 0 0-.673-.673L4.105 12l5.296-1.926a1.12 1.12 0 0 0 .673-.673L12 4.105 13.926 9.4a1.12 1.12 0 0 0 .673.673L19.895 12z" })
  ] });
});
h.displayName = "StarFour";
export {
  h as StarFour
};
//# sourceMappingURL=StarFour.js.map
