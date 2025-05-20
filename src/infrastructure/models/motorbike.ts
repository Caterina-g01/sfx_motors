export interface Motorbike {
    id: string;
    description: string;
    imageUrl: string;
    isInStock: boolean;
    params: {
        drive: string;
        engine: string;
        mileage: string;
        model: string;
        transmission: string;
    }
    price: {
        byn: number;
        usd: number;
        rub: number;
    }
}