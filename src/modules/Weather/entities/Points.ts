interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Distance {
    unitCode: string;
    value: number;
}

export interface RelativeProperties {
    city: string;
    state: string;
    distance: Distance;
    bearing: Distance;
}

export interface RelativeLocation {
    type: string;
    geometry: Geometry;
    properties: RelativeProperties;
}

export interface Properties {
    '@id': string;
    '@type': string;
    cwa: string;
    forecastOffice: string;
    gridId: string;
    gridX: number;
    gridY: number;
    forecast: string;
    forecastHourly: string;
    forecastGridData: string;
    observationStations: string;
    relativeLocation: RelativeLocation;
    forecastZone: string;
    county: string;
    fireWeatherZone: string;
    timeZone: string;
    radarStation: string;
}

export interface PointsResponse {
    '@context': any[];
    id: string;
    type: string;
    geometry: Geometry;
    properties: Properties;
}