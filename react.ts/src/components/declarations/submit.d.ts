/**@params event, @params btnid*/

import type React from "react";

declare const submitconfig: <T = HTMLElement>(event: React.KeyboardEvent<T>, btnid: string | number) => void | undefined;
export default submitconfig;