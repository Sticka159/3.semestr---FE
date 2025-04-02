import React from "react";
import "./FlipSwitchButton.css";

function FlipSwitchButton({ leftLabel, middleLabel, rightLabel, active, onChange }) {
    return (
        <div className="flip-switch-button">
            <button
                className={`switch-btn ${active === leftLabel ? "active" : ""}`}
                onClick={() => active !== leftLabel && onChange(leftLabel)}
                disabled={active === leftLabel}
            >
                {leftLabel}
            </button>
            {middleLabel && (
                <button
                    className={`switch-btn ${active === middleLabel ? "active" : ""}`}
                    onClick={() => active !== middleLabel && onChange(middleLabel)}
                    disabled={active === middleLabel}
                >
                    {middleLabel}
                </button>
            )}
            <button
                className={`switch-btn ${active === rightLabel ? "active" : ""}`}
                onClick={() => active !== rightLabel && onChange(rightLabel)}
                disabled={active === rightLabel}
            >
                {rightLabel}
            </button>
        </div>
    );
}

export default FlipSwitchButton;
