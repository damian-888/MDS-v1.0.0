import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as v } from "react";
const s = m(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...l
}, a) => {
  const t = v(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3-12.75a1.125 1.125 0 0 0-1.125 1.125v1.72L9.596 7.296a1.125 1.125 0 0 0-1.721.954v7.5a1.125 1.125 0 0 0 1.721.954l4.279-2.674v1.72a1.125 1.125 0 1 0 2.25 0v-7.5A1.125 1.125 0 0 0 15 7.125m-4.875 6.595v-3.44L12.877 12z" })
  ] });
});
s.displayName = "SkipForwardCircle";
export {
  s as SkipForwardCircle
};
//# sourceMappingURL=SkipForwardCircle.js.map
