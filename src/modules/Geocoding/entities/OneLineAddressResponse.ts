export interface Address {
    address: string;
}

export interface Benchmark {
    isDefault: boolean;
    benchmarkDescription: string;
    id: string;
    benchmarkName: string;
}

export interface Input {
    address: Address;
    benchmark: Benchmark;
}

export interface TigerLine {
    side: string;
    tigerLineId: string;
}

export interface Coordinates {
    x: number;
    y: number;
}

export interface AddressComponents {
    zip: string;
    streetName: string;
    preType: string;
    city: string;
    preDirection: string;
    suffixDirection: string;
    fromAddress: string;
    state: string;
    suffixType: string;
    toAddress: string;
    suffixQualifier: string;
    preQualifier: string;
}

export interface AddressMatch {
    tigerLine: TigerLine;
    coordinates: Coordinates;
    addressComponents: AddressComponents;
    matchedAddress: string;
}

export interface Result {
    input: Input;
    addressMatches: AddressMatch[];
}

export interface OneLineAddressResponse {
    result: Result;
}