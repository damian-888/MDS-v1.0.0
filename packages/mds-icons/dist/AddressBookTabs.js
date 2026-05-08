import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const v = m(({
  size: r = "1em",
  title: o,
  titleId: h,
  ...a
}, i) => {
  const s = t(), d = o ? h ?? s : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-1.875 7.5h1.5v3.75h-1.5zm1.5-2.25h-1.5v-3h1.5zm-14.25-3h10.5v14.25h-10.5zm12.75 14.25v-3h1.5v3zm-3.41-3.656a4.05 4.05 0 0 0-1.422-2.156 3.374 3.374 0 1 0-5.336 0 4.06 4.06 0 0 0-1.421 2.156 1.125 1.125 0 1 0 2.178.562c.207-.8 1.032-1.406 1.911-1.406.88 0 1.705.604 1.91 1.406a1.125 1.125 0 1 0 2.18-.562M9 11.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0" })
  ] });
});
v.displayName = "AddressBookTabs";
export {
  v as AddressBookTabs
};
//# sourceMappingURL=AddressBookTabs.js.map
