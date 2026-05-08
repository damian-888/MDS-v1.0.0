import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...o
}, i) => {
  const h = n(), d = l ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": d, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.557 19.866 15.822 6.844l.716-1.969h.712a1.125 1.125 0 0 0 0-2.25h-9a1.125 1.125 0 0 0-.104 2.244l-5.452 15a1.125 1.125 0 0 0 .672 1.441q.186.066.384.065a1.125 1.125 0 0 0 1.058-.74l.817-2.26h3.61l-.542 1.49a1.125 1.125 0 0 0 2.115.77l1.64-4.51h4.355l1.64 4.51a1.125 1.125 0 1 0 2.114-.77m-8.867-8.241H8.083l.823-2.25h3.606zm1.636-4.5H9.72l.819-2.25h3.605zm-6.879 9 .819-2.25h3.61l-.82 2.25zm6.819-2.25 1.36-3.74 1.359 3.74z" })
  ] });
});
s.displayName = "Ladder";
export {
  s as Ladder
};
//# sourceMappingURL=Ladder.js.map
