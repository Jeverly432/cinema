import { classNames } from "shared/lib/classNames";
import style from "./Switch.module.scss";
import { SwitchProps } from "./types";

let switchCounter = 0;

export const Switch = ({ className, checked, onChange }: SwitchProps) => {
    const switchId = `switch-${switchCounter}`;
    switchCounter += 1;

    return (
        <label
            className={classNames(style.Switch, {}, [className])}
            htmlFor={switchId}
            aria-label="Switch"
        >
            <input
                id={switchId}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={style.slider} />
        </label>
    );
};
