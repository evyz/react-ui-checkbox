import * as React$1 from 'react';
import { DOMAttributes } from 'react';

interface WidgetBaseDOMAttributes extends DOMAttributes<any> {
}
interface WidgetBaseEvents {
    /**
     * @description React.DOMAttributes
     */
    DOMAttributes?: WidgetBaseDOMAttributes;
}
interface WidgetBaseOptions extends WidgetBaseEvents {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}

interface CheckboxOptions extends WidgetBaseOptions {
    state?: {
        value?: boolean;
        setValue?: Function;
    };
    events?: {
        onClick?: Function;
    };
    gui?: {
        label?: string;
        labelStyles?: React.CSSProperties;
    };
}

declare const Checkbox: (props: CheckboxOptions) => React$1.JSX.Element;

export { Checkbox as default };
