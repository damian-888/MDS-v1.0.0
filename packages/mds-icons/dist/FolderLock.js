import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...l
}, h) => {
  const i = n(), a = o ? e ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": a, ...l, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21 14.25h-.375v-.375a3 3 0 0 0-6 0v.375h-.375a1.125 1.125 0 0 0-1.125 1.125V19.5a1.125 1.125 0 0 0 1.125 1.125H21a1.125 1.125 0 0 0 1.125-1.125v-4.125A1.125 1.125 0 0 0 21 14.25m-4.125-.375a.75.75 0 1 1 1.5 0v.375h-1.5zm3 4.5h-4.5V16.5h4.5zm.375-12h-7.745l-2.437-2.746A1.88 1.88 0 0 0 8.662 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.933a1.82 1.82 0 0 0 1.817 1.817h6.11a1.125 1.125 0 1 0 0-2.25H4.126v-9.75h15.75a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875m-16.125 0V5.25h4.37l1 1.125z" })
  ] });
});
v.displayName = "FolderLock";
export {
  v as FolderLock
};
//# sourceMappingURL=FolderLock.js.map
