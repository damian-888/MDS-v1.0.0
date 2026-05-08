import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...o
}, a) => {
  const n = s(), l = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": l, ...o, children: [
    e ? /* @__PURE__ */ d("title", { id: l, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M5.52 16.769a1.125 1.125 0 0 0 1.5-.54l1.459-3.103h7.042l1.46 3.104a1.124 1.124 0 1 0 2.037-.959l-6-12.75a1.125 1.125 0 0 0-2.036 0l-6 12.75a1.125 1.125 0 0 0 .539 1.498M12 5.642l2.463 5.234H9.537zm9.375 14.609a1.125 1.125 0 0 1-1.125 1.124H3.75a1.125 1.125 0 0 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "TextAUnderline";
export {
  m as TextAUnderline
};
//# sourceMappingURL=TextAUnderline.js.map
