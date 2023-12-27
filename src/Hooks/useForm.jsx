import { useState } from "react";

export function useForm(steps){
    const [ActualStep, SetActualStep] = useState(0);

    function ChangeStep(i, e) {
        e && e.preventDefault();

        if(i < 0 || i >= steps.length){
            return
        }

        SetActualStep(i);
    }

    return{
        ActualStep,
        ActualComponent: steps[ActualStep],
        ChangeStep,
    }
}