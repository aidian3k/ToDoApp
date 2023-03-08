import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { IOptions } from "../Options";
interface IDatePickerContext {
    options: IOptions;
    view: Views;
    setView: Dispatch<SetStateAction<Views>>;
    show: boolean;
    setShow: (show: boolean) => void;
    selectedDate: Date;
    changeSelectedDate: (action: "prev" | "next" | "date" | "today", date: Date) => void;
    showSelectedDate: boolean;
    setShowSelectedDate: Dispatch<SetStateAction<boolean>>;
    selectedMonth: number;
    selectedYear: number;
    getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions) => string;
}
export declare type Views = "days" | "months" | "years" | "decades";
export declare const DatePickerContext: React.Context<IDatePickerContext>;
interface IDatePickerProviderProps {
    children: ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
}
declare const DatePickerProvider: ({ children, options: customOptions, onChange, show, setShow }: IDatePickerProviderProps) => JSX.Element;
export default DatePickerProvider;
//# sourceMappingURL=DatePickerProvider.d.ts.map