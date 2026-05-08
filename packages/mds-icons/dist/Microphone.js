import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, l) => {
  const n = s(), e = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 16.875A4.88 4.88 0 0 0 16.875 12V6a4.875 4.875 0 1 0-9.75 0v6A4.88 4.88 0 0 0 12 16.875M9.375 6a2.625 2.625 0 0 1 5.25 0v6a2.625 2.625 0 0 1-5.25 0zm3.75 14.552V22.5a1.125 1.125 0 1 1-2.25 0v-1.948A8.64 8.64 0 0 1 3.375 12a1.125 1.125 0 0 1 2.25 0 6.375 6.375 0 1 0 12.75 0 1.125 1.125 0 1 1 2.25 0 8.64 8.64 0 0 1-7.5 8.552" })
  ] });
});
c.displayName = "Microphone";
export {
  c as Microphone
};
//# sourceMappingURL=Microphone.js.map
