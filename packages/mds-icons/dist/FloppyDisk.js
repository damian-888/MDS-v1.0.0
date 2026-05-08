import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, e) => {
  const h = n(), i = o ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": i, ...l, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.826 6.485-3.31-3.31a1.86 1.86 0 0 0-1.326-.55H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V7.81a1.86 1.86 0 0 0-.55-1.325m-5.451 12.64h-6.75V15h6.75zm3.75 0h-1.5v-4.5a1.875 1.875 0 0 0-1.875-1.875h-7.5a1.875 1.875 0 0 0-1.875 1.875v4.5h-1.5V4.875h11.156l3.094 3.094zm-3.75-11.25A1.125 1.125 0 0 1 14.25 9H9a1.125 1.125 0 0 1 0-2.25h5.25a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "FloppyDisk";
export {
  s as FloppyDisk
};
//# sourceMappingURL=FloppyDisk.js.map
