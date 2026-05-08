import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, c) => {
  const l = s(), e = r ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: c, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.5 6.374q-.264.001-.527.02a9 9 0 0 0-1.991-2.25c-3.67-2.964-8.68-2.289-8.891-2.259a1.125 1.125 0 0 0-.469 2.05c1.427.949 2.14 2.481 2.476 4.033A7.125 7.125 0 1 0 13.4 19.915a7.125 7.125 0 1 0 3.1-13.54m-2.134 4.975a7.2 7.2 0 0 0-1.147-1.45c.443-.403.955-.721 1.513-.938.214.574.375 1.168.48 1.772a1.13 1.13 0 0 0-.846.615M12.58 5.905c.39.317.744.678 1.053 1.075a7.2 7.2 0 0 0-2.29 1.602 7 7 0 0 0-1.95-.614C9.16 6.66 8.719 5.31 7.929 4.124c1.425.158 3.204.608 4.651 1.781m-4.33 13.97a4.875 4.875 0 0 1-.893-9.667q.027 1.014-.07 2.024a1.125 1.125 0 0 0-.478 2.192c.942.267 1.94.267 2.882 0a1.124 1.124 0 0 0-.14-2.19q.082-.956.064-1.914a4.875 4.875 0 0 1-1.365 9.554m8.25-1.5c-.618 0-1.23-.117-1.804-.346a7.1 7.1 0 0 0 .375-5.103c.94.266 1.935.266 2.875 0a1.125 1.125 0 0 0-.45-2.195 13 13 0 0 0-.48-2.077 4.875 4.875 0 0 1-.516 9.72" })
  ] });
});
m.displayName = "Cherries";
export {
  m as Cherries
};
//# sourceMappingURL=Cherries.js.map
