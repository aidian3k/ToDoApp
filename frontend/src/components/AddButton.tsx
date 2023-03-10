import {FC} from "react";
// @ts-ignore
import addingIcon from '../resources/plus.svg';

export const AddButton: FC = () => {
    return (
        <button type="button"
                className="border border-b-emerald-700 hover:bg-fuchsia-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full hover:amber-600 hover:transition-all bg-amber-600">
            <img src={addingIcon} alt={'photo'} className={'sm:w-16 sm:h-16 w-14 h-14'}/>
        </button>
    )
}