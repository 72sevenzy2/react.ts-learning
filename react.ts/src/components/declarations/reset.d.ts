/** @params event @params setc */

import type { Dispatch, SetStateAction } from "react";
import type React from "react";

declare const resetconfig: <T = HTMLElement>(event: KeyboardEvent<T>, setc: Dispatch<SetStateAction<number>>) => number;
export default resetconfig;