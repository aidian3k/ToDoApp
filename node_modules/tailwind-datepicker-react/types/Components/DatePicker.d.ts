import { ReactNode } from "react";
import { IOptions } from "../Options";
export interface IDatePickerProps {
    children?: ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    classNames?: string;
}
declare const DatePicker: ({ children, options, onChange, classNames, show, setShow }: IDatePickerProps) => JSX.Element;
export default DatePicker;
//# sourceMappingURL=DatePicker.d.ts.map