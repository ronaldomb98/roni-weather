interface Geometry {
    type: string;
    coordinates: number[][][];
}

export interface Elevation {
    unitCode: string;
    value: number;
}

export interface Period {
    number: number;
    name: string;
    startTime: Date;
    endTime: Date;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string;
    probabilityOfPrecipitation: Elevation;
    dewpoint: Elevation;
    relativeHumidity: Elevation;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

export interface ForecastProperties {
    updated: Date;
    units: string;
    forecastGenerator: string;
    generatedAt: Date;
    updateTime: Date;
    validTimes: string;
    elevation: Elevation;
    periods: Period[];
}

export interface ForecastResponse {
    '@context': any[];
    type: string;
    geometry: Geometry;
    properties: ForecastProperties;
}