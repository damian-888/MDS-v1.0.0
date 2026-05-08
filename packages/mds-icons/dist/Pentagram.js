import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = h(), a = r ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.781 8.422A1.87 1.87 0 0 0 21 7.126h-5.452l-1.762-5.433a1.868 1.868 0 0 0-3.567-.005L8.45 7.126H3a1.875 1.875 0 0 0-1.097 3.395L6.319 13.7 4.625 18.92a1.875 1.875 0 0 0 2.881 2.099L12 17.786l4.49 3.23a1.875 1.875 0 0 0 2.885-2.095l-1.694-5.222 4.42-3.18a1.88 1.88 0 0 0 .68-2.097M12 3.48l1.183 3.646h-2.366zM4.164 9.376h3.557l-.673 2.075zm2.954 9.15 1.119-3.448 1.836 1.322zm1.848-5.695 1.125-3.455h3.827l1.125 3.455L12 15.014zm4.96 3.569 1.837-1.322 1.118 3.448zm3.026-4.95-.673-2.074h3.557z" })
  ] });
});
s.displayName = "Pentagram";
export {
  s as Pentagram
};
//# sourceMappingURL=Pentagram.js.map
