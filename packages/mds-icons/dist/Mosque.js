import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, h) => {
  const l = n(), a = o ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.625 11.625a3 3 0 0 0-.756.094c-.12-3.895-2.751-5.843-4.687-7.273-1.103-.815-2.057-1.52-2.057-2.196a1.125 1.125 0 1 0-2.25 0c0 .676-.954 1.38-2.062 2.198-1.935 1.431-4.565 3.375-4.688 7.274a2.998 2.998 0 0 0-3.75 2.903V19.5A1.125 1.125 0 0 0 1.5 20.625h21a1.125 1.125 0 0 0 1.125-1.125v-4.875a3 3 0 0 0-3-3m-16.5 6.75h-1.5v-3.75a.75.75 0 1 1 1.5 0zm6.03-12.118c.655-.482 1.312-.971 1.845-1.525.533.554 1.194 1.043 1.846 1.525 1.604 1.187 3.254 2.41 3.676 4.618H6.478C6.9 8.666 8.55 7.444 10.154 6.257m7.47 12.118h-2.25V15.75a1.125 1.125 0 1 0-2.25 0v2.625h-2.25V15.75a1.125 1.125 0 1 0-2.25 0v2.625h-2.25v-5.25h11.25zm3.75 0h-1.5v-3.75a.75.75 0 1 1 1.5 0z" })
  ] });
});
s.displayName = "Mosque";
export {
  s as Mosque
};
//# sourceMappingURL=Mosque.js.map
