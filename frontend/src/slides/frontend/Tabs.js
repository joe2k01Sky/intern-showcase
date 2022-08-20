import React, { useState } from "react";
import Button from "./Button";

/**
 * Returns tabs that you can use to conditionally render items
 * @param tabs An ordered array of tabs titles e.g. ["Tab 0", "Tab 1", "Tab 2"]
 * @param setter A stateful function to set state in your parent component so you know what tab is selected
 * @param identifier String identifier (only for multiple tabs on page)
 * @returns JSX
 */
const Tabs = ({ tabs, setter, identifier = "default" }) => {
  const [tab, setTab] = useState(0);
  return (
    <div className="tab">
      <ul>
        {tabs.map((tabTitle, index) => (
          <li key={`tab-${identifier}-${index}`}>
            <Button
              fullWidth
              styling={index !== tab ? "secondary invert" : "primary"}
              onClick={() => {
                setTab(index);
                setter(index);
              }}
              text={tabTitle}
              id={`tab-${tabTitle}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
