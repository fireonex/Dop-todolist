import {createContext, ReactNode, useState} from "react";

type ModelContextType = {
    setModel: (model: string | null) => void;
    model: string | null;
};


const ModelCrossContext = createContext<ModelContextType>({
    setModel: (): void => {},
    model: null,
});

const ModelProvider = ({ children }: { children: ReactNode }) => {
    const [model, setModel] = useState<string | null>('null');

    return (
        <ModelCrossContext.Provider value={{ setModel, model }}>
            {children}
        </ModelCrossContext.Provider>
    );
};

export { ModelCrossContext, ModelProvider };
