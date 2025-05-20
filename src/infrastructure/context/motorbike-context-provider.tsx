import { getDatabase, ref, onValue } from "firebase/database";
import { useState, ReactNode, useEffect } from "react"
import { MotorbikeContext } from "./motorbike-context"
import { Motorbike } from "../models/motorbike";

export const MotorbikeContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [motorbikeList, setMotorbikeList] = useState<Motorbike[]>([])
    const db = getDatabase();

    useEffect(() => {
        const userRef = ref(db, '/productList');
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            setMotorbikeList(data.items)
            setIsLoading(false)
        });
    }, [])

    return (
        <MotorbikeContext.Provider value={{ isLoading, motorbikeList }}>
            {children}
        </MotorbikeContext.Provider>
    )
}