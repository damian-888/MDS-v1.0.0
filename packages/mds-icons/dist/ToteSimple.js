import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...d
}, a) => {
  const t = m(), r = e ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.406 6.258A1.89 1.89 0 0 0 21 5.626h-4.141a4.874 4.874 0 0 0-9.718 0H3.007A1.875 1.875 0 0 0 1.138 7.72l1.336 11.25a1.88 1.88 0 0 0 1.87 1.655h15.312a1.88 1.88 0 0 0 1.87-1.655l1.336-11.25a1.88 1.88 0 0 0-.456-1.463M12 3.376a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.376m7.33 15H4.67l-1.248-10.5h17.156z" })
  ] });
});
s.displayName = "ToteSimple";
export {
  s as ToteSimple
};
//# sourceMappingURL=ToteSimple.js.map
