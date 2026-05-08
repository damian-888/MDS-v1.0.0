import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...i
}, a) => {
  const t = m(), r = e ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...i, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m0-13.5a4.125 4.125 0 0 0-3.15 6.788l-.925 3.006A1.125 1.125 0 0 0 9 17.625h6a1.125 1.125 0 0 0 1.075-1.456l-.924-3.006A4.124 4.124 0 0 0 12 6.375m.8 6.798.677 2.202h-2.954l.677-2.202a1.125 1.125 0 0 0-.375-1.209 1.875 1.875 0 1 1 2.344 0 1.125 1.125 0 0 0-.37 1.209" })
  ] });
});
s.displayName = "Keyhole";
export {
  s as Keyhole
};
//# sourceMappingURL=Keyhole.js.map
