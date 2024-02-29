import { Suspense } from "react";

import ForgotPasswordWrapper from "./wrapper";

export default function Page(){
    return <Suspense>
        <ForgotPasswordWrapper/>
    </Suspense>
}