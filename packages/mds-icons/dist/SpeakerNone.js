import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...l
}, a) => {
  const n = s(), o = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M14.744 1.99a1.13 1.13 0 0 0-1.185.122L7.114 7.125H3A1.875 1.875 0 0 0 1.125 9v6A1.875 1.875 0 0 0 3 16.875h4.114l6.445 5.013A1.125 1.125 0 0 0 15.375 21V3a1.13 1.13 0 0 0-.63-1.01M3.375 9.374h3v5.25h-3zm9.75 9.324-4.5-3.5V8.8l4.5-3.5z" })
  ] });
});
m.displayName = "SpeakerNone";
export {
  m as SpeakerNone
};
//# sourceMappingURL=SpeakerNone.js.map
