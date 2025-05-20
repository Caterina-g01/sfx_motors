import React from 'react';
import { Motorbike } from '../models/motorbike';

export interface MotorbikeContextType {
    motorbikeList: Motorbike[];
    isLoading: boolean;
}

export const MotorbikeContext = React.createContext<MotorbikeContextType>({
    motorbikeList: [],
    isLoading: true,
})