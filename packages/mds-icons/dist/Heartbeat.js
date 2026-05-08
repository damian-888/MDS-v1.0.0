import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const i = h(), e = a ? o ?? i : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M6.728 13.875H2.972a1.125 1.125 0 1 1 0-2.25h3.153l1.167-1.75a1.125 1.125 0 0 1 1.875 0l2.063 3.094.562-.843a1.13 1.13 0 0 1 .938-.501h2.25a1.125 1.125 0 1 1 0 2.25h-1.65l-1.168 1.75a1.125 1.125 0 0 1-1.876 0L8.225 12.53l-.562.843a1.13 1.13 0 0 1-.934.501m9.951-10.5c-1.886 0-3.562.743-4.694 2.021-1.134-1.278-2.808-2.021-4.695-2.021a6.187 6.187 0 0 0-6.158 5.501 1.129 1.129 0 1 0 2.243.248A3.937 3.937 0 0 1 7.29 5.625c1.672 0 3.07.881 3.652 2.3a1.125 1.125 0 0 0 2.086 0c.581-1.419 1.98-2.3 3.651-2.3a3.945 3.945 0 0 1 3.946 3.938c0 2.758-2.424 5.415-4.459 7.158a31 31 0 0 1-4.179 2.982c-1.019-.604-3.316-2.062-5.298-4.005a1.126 1.126 0 0 0-1.578 1.604c2.849 2.795 6.201 4.613 6.343 4.688a1.13 1.13 0 0 0 1.067 0c.417-.227 10.354-5.646 10.354-12.427a6.2 6.2 0 0 0-6.196-6.188" })
  ] });
});
s.displayName = "Heartbeat";
export {
  s as Heartbeat
};
//# sourceMappingURL=Heartbeat.js.map
