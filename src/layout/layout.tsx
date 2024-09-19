"use client";
import { classNames } from "primereact/utils";
import React, { useContext } from "react";
import { ReactNode } from "react";
import { LayoutContext } from "./context/layoutcontext";

type ChildContainerProps = {
  children: ReactNode;
};

const Layout = ({ children }: ChildContainerProps) => {
  const { layoutConfig, layoutState, setLayoutState } =
    useContext(LayoutContext);

  const containerClass = classNames("layout-wrapper", {
    "layout-overlay": layoutConfig.menuMode === "overlay",
    "layout-static": layoutConfig.menuMode === "static",
    "layout-static-inactive":
      layoutState.staticMenuDesktopInactive &&
      layoutConfig.menuMode === "static",
    "layout-overlay-active": layoutState.overlayMenuActive,
    "layout-mobile-active": layoutState.staticMenuMobileActive,
    "p-input-filled": layoutConfig.inputStyle === "filled",
    "p-ripple-disabled": !layoutConfig.ripple,
  });

  return (
    <React.Fragment>
      <div className={containerClass}>
        <div className="layout-main-container">
          <div className="layout-main">{children}</div>
        </div>
        <div className="layout-mask"></div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
