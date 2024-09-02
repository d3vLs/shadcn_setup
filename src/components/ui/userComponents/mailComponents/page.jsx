// import { cookies } from "next/headers";
// import Image from "next/image";
import { useState, useEffect } from "react";

import { Mail } from "./components/Mail";
import { accounts, mails } from "../../../../lib/mailData";

export default function MailPage() {
  const [defaultLayout, setDefaultLayout] = useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined);

  useEffect(() => {
    const layoutCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("react-resizable-panels:layout:mail"));
    const collapsedCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("react-resizable-panels:collapsed"));

    if (layoutCookie) {
      setDefaultLayout(JSON.parse(layoutCookie.split("=")[1]));
    }

    if (collapsedCookie) {
      setDefaultCollapsed(JSON.parse(collapsedCookie.split("=")[1]));
    }
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
}
