import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = n(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875a10.125 10.125 0 1 0 2.975 19.806c.177-.054.338-.15.47-.282l5.959-5.96c.13-.13.227-.291.281-.468A10.132 10.132 0 0 0 12 1.875m7.605 12.18-5.55 5.55a7.863 7.863 0 1 1 5.55-5.55m-12.48-3.93a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m9.75 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.151 4.688c-1.031 1.786-2.755 2.812-4.724 2.812S8.31 16.6 7.276 14.813a1.125 1.125 0 0 1 1.948-1.126c.365.631 1.21 1.688 2.776 1.688s2.411-1.057 2.776-1.687a1.123 1.123 0 0 1 1.547-.43 1.127 1.127 0 0 1 .4 1.555" })
  ] });
});
s.displayName = "SmileySticker";
export {
  s as SmileySticker
};
//# sourceMappingURL=SmileySticker.js.map
