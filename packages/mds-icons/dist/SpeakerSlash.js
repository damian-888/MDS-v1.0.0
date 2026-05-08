import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = s(), r = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.333 2.992a1.125 1.125 0 1 0-1.666 1.513l2.38 2.619H3a1.875 1.875 0 0 0-1.875 1.875v6A1.875 1.875 0 0 0 3 16.874h4.114l6.445 5.013a1.125 1.125 0 0 0 1.816-.888v-3.615l3.293 3.621a1.125 1.125 0 0 0 1.665-1.513zM3.374 9.374h3v5.25h-3zm9.75 9.324-4.5-3.5v-5.24l4.5 4.947zM10.219 6.136a1.124 1.124 0 0 1 .198-1.579l3.141-2.444a1.125 1.125 0 0 1 1.817.886v5.9a1.125 1.125 0 1 1-2.25 0V5.3l-1.327 1.032a1.125 1.125 0 0 1-1.58-.197zm6.937 4.626a1.125 1.125 0 0 1 1.688-1.486 4.125 4.125 0 0 1 .52 4.708 1.125 1.125 0 0 1-1.969-1.083 1.875 1.875 0 0 0-.24-2.14zM23.625 12A7.9 7.9 0 0 1 21.833 17a1.124 1.124 0 0 1-1.95-1.042c.045-.142.117-.274.213-.387a5.625 5.625 0 0 0-.153-7.322 1.124 1.124 0 1 1 1.677-1.5 7.86 7.86 0 0 1 2.005 5.25" })
  ] });
});
v.displayName = "SpeakerSlash";
export {
  v as SpeakerSlash
};
//# sourceMappingURL=SpeakerSlash.js.map
