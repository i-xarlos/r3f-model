import React from "react";
import headerStyles from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={headerStyles.headerInner}>
        <div className={headerStyles.logo}>CHAIR.</div>
        <nav>
          <ul>
            <li>
              <a href="/">discover</a>
            </li>
            <li>
              <a href="/">products</a>
            </li>
            <li>
              <a href="/">solutions</a>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className={headerStyles.btn}>
              <a href="/">order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
