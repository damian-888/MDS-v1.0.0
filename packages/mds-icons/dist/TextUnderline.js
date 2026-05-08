import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...l
}, n) => {
  const t = h(), d = e ? o ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    e ? /* @__PURE__ */ i("title", { id: d, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.125 21A1.125 1.125 0 0 1 18 22.125H6a1.125 1.125 0 1 1 0-2.25h12A1.125 1.125 0 0 1 19.125 21M12 18.375A6.38 6.38 0 0 0 18.375 12V5.25a1.125 1.125 0 1 0-2.25 0V12a4.125 4.125 0 0 1-8.25 0V5.25a1.125 1.125 0 0 0-2.25 0V12A6.38 6.38 0 0 0 12 18.375" })
  ] });
});
m.displayName = "TextUnderline";
export {
  m as TextUnderline
};
//# sourceMappingURL=TextUnderline.js.map
