import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const n = s(), a = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.888 9.136a3.376 3.376 0 1 0-5.16-4.31l-2.114-.577a3.376 3.376 0 0 0-5.75-2.137 3.38 3.38 0 0 0-.732 3.679l-2.77 2.493a3.38 3.38 0 0 0-4 .579 3.375 3.375 0 0 0 4.288 5.176l6.12 4.488a3.375 3.375 0 1 0 5.35-1.652l2.38-6.75a3.37 3.37 0 0 0 2.388-.99M13.1 16.712l-6.12-4.488a3.4 3.4 0 0 0-.114-2.266l2.772-2.495a3.375 3.375 0 0 0 3.999-.577q.215-.217.386-.469l2.114.577c.058.806.405 1.565.977 2.137q.128.129.267.244l-2.38 6.75c-.679 0-1.341.205-1.901.587m7.197-10.76a1.125 1.125 0 1 1-1.593 1.589 1.125 1.125 0 0 1 1.593-1.588m-9.844-2.25a1.125 1.125 0 1 1 1.587 1.594 1.125 1.125 0 0 1-1.586-1.593m-7.5 8.345a1.125 1.125 0 1 1 1.594-1.587 1.125 1.125 0 0 1-1.594 1.586m12.844 8.25a1.124 1.124 0 1 1-1.586-1.593 1.124 1.124 0 0 1 1.585 1.593z" })
  ] });
});
c.displayName = "Polygon";
export {
  c as Polygon
};
//# sourceMappingURL=Polygon.js.map
