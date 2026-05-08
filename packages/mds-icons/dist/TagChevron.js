import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const n = s(), e = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.438 11.376 19.159 4.96a1.88 1.88 0 0 0-1.56-.835H3a1.125 1.125 0 0 0-.937 1.75L6.148 12l-4.085 6.126A1.125 1.125 0 0 0 3 19.875H17.6a1.88 1.88 0 0 0 1.56-.835l4.279-6.416a1.13 1.13 0 0 0 0-1.248m-6.04 6.249H5.102l3.336-5a1.125 1.125 0 0 0 0-1.25l-3.336-5h12.296L21.148 12z" })
  ] });
});
m.displayName = "TagChevron";
export {
  m as TagChevron
};
//# sourceMappingURL=TagChevron.js.map
