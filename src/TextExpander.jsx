import { useState } from "react";

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#007bff",
  expanded = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const text = typeof children === "string" ? children : children.toString();

  const words = text.split(" ");
  const displayText = isExpanded
    ? text
    : `${words.slice(0, collapsedNumWords).join(" ")}${
        words.length > collapsedNumWords ? "..." : ""
      }`;

  return (
    <div className={`text-expander ${className}`}>
      <p>{displayText}</p>
      {words.length > collapsedNumWords && (
        <button onClick={toggleExpand} style={{ backgroundColor: buttonColor }}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      )}
    </div>
  );
};

export default TextExpander;
