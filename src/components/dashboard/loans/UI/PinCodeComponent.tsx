import React, { useState, useRef } from "react";

interface PinCodeComponentProps {
    onComplete: (code: string) => void;
}

export const PinCodeComponent: React.FC<PinCodeComponentProps> = ({ onComplete }) => {
    const pinLength = 6;
    const [pin, setPin] = useState<string[]>(Array(pinLength).fill(""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(pinLength).fill(null));

    const resetValue = (index: number) => {
        const newPin = [...pin];
        for (let i = index; i < pinLength; i++) {
            newPin[i] = "";
        }
        setPin(newPin);
    };

    const stepForward = (index: number) => {
        if (pin[index] && index < pinLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
        checkPin();
    };

    const stepBack = (index: number) => {
        if (index > 0) {
            inputRefs.current[index - 1]?.focus();
            resetValue(index - 1);
        }
    };

    const checkPin = () => {
        const code = pin.join("");
        if (code.length === pinLength) {
            onComplete(code); // Llama a la función onComplete con el código PIN
        }
    };

    const handleInputChange = (index: number, value: string) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-10">
            <div className="flex">
                {Array.from({ length: pinLength }).map((_, index) => (
                    <input
                        key={`codefield_${index}`}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        autoFocus={index === 0}
                        id={`codefield_${index}`}
                        className="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl"
                        type="text"
                        value={pin[index]}
                        maxLength={1}
                        inputMode="decimal"
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyUp={() => stepForward(index)}
                        onKeyDown={(e) => {
                            if (e.key === "Backspace") {
                                stepBack(index);
                            }
                        }}
                        onFocus={() => resetValue(index)}
                    />
                ))}
            </div>
        </div>
    );
};