import { PointsResponse, ForecastResponse } from '../entities';

export const mockForecast: ForecastResponse = {
    '@context': [
        'https://geojson.org/geojson-ld/geojson-context.jsonld',
        {
            '@version': '1.1',
            'wx': 'https://api.weather.gov/ontology#',
            'geo': 'http://www.opengis.net/ont/geosparql#',
            'unit': 'http://codes.wmo.int/common/unit/',
            '@vocab': 'https://api.weather.gov/ontology#'
        }
    ],
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            [
                [
                    -76.8960022,
                    38.8861054
                ],
                [
                    -76.8997895,
                    38.8641544
                ],
                [
                    -76.8716014,
                    38.861204199999996
                ],
                [
                    -76.86780830000001,
                    38.88315479999999
                ],
                [
                    -76.8960022,
                    38.8861054
                ]
            ]
        ]
    },
    'properties': {
        'updated': '2023-03-06T20:30:15+00:00',
        'units': 'us',
        'forecastGenerator': 'BaselineForecastGenerator',
        'generatedAt': '2023-03-06T23:02:50+00:00',
        'updateTime': '2023-03-06T20:30:15+00:00',
        'validTimes': '2023-03-06T14:00:00+00:00/P7DT11H',
        'elevation': {
            'unitCode': 'wmoUnit:m',
            'value': 75.8952
        },
        'periods': [
            {
                'number': 1,
                'name': 'Tonight',
                'startTime': '2023-03-06T18:00:00-05:00',
                'endTime': '2023-03-07T06:00:00-05:00',
                'isDaytime': false,
                'temperature': 39,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 30
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 2.2222222222222223
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 79
                },
                'windSpeed': '6 to 9 mph',
                'windDirection': 'E',
                'icon': 'https://api.weather.gov/icons/land/night/bkn/rain_showers,30?size=medium',
                'shortForecast': 'Mostly Cloudy then Scattered Rain Showers',
                'detailedForecast': 'Scattered rain showers after 1am. Mostly cloudy, with a low around 39. East wind 6 to 9 mph. Chance of precipitation is 30%.'
            },
            {
                'number': 2,
                'name': 'Tuesday',
                'startTime': '2023-03-07T06:00:00-05:00',
                'endTime': '2023-03-07T18:00:00-05:00',
                'isDaytime': true,
                'temperature': 52,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 20
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 1.6666666666666667
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 82
                },
                'windSpeed': '9 to 21 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/day/rain_showers,20/wind_bkn?size=medium',
                'shortForecast': 'Isolated Rain Showers then Partly Sunny',
                'detailedForecast': 'Isolated rain showers before 7am. Partly sunny, with a high near 52. North wind 9 to 21 mph, with gusts as high as 33 mph. Chance of precipitation is 20%.'
            },
            {
                'number': 3,
                'name': 'Tuesday Night',
                'startTime': '2023-03-07T18:00:00-05:00',
                'endTime': '2023-03-08T06:00:00-05:00',
                'isDaytime': false,
                'temperature': 32,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -7.222222222222222
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 58
                },
                'windSpeed': '17 to 22 mph',
                'windDirection': 'NW',
                'icon': 'https://api.weather.gov/icons/land/night/wind_few?size=medium',
                'shortForecast': 'Mostly Clear',
                'detailedForecast': 'Mostly clear, with a low around 32. Northwest wind 17 to 22 mph, with gusts as high as 37 mph.'
            },
            {
                'number': 4,
                'name': 'Wednesday',
                'startTime': '2023-03-08T06:00:00-05:00',
                'endTime': '2023-03-08T18:00:00-05:00',
                'isDaytime': true,
                'temperature': 50,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -3.888888888888889
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 58
                },
                'windSpeed': '20 mph',
                'windDirection': 'NW',
                'icon': 'https://api.weather.gov/icons/land/day/few?size=medium',
                'shortForecast': 'Sunny',
                'detailedForecast': 'Sunny, with a high near 50. Northwest wind around 20 mph, with gusts as high as 31 mph.'
            },
            {
                'number': 5,
                'name': 'Wednesday Night',
                'startTime': '2023-03-08T18:00:00-05:00',
                'endTime': '2023-03-09T06:00:00-05:00',
                'isDaytime': false,
                'temperature': 31,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -2.7777777777777777
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 72
                },
                'windSpeed': '12 to 16 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/night/few?size=medium',
                'shortForecast': 'Mostly Clear',
                'detailedForecast': 'Mostly clear, with a low around 31. North wind 12 to 16 mph, with gusts as high as 22 mph.'
            },
            {
                'number': 6,
                'name': 'Thursday',
                'startTime': '2023-03-09T06:00:00-05:00',
                'endTime': '2023-03-09T18:00:00-05:00',
                'isDaytime': true,
                'temperature': 53,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -2.7777777777777777
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 72
                },
                'windSpeed': '15 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/day/few?size=medium',
                'shortForecast': 'Sunny',
                'detailedForecast': 'Sunny, with a high near 53.'
            },
            {
                'number': 7,
                'name': 'Thursday Night',
                'startTime': '2023-03-09T18:00:00-05:00',
                'endTime': '2023-03-10T06:00:00-05:00',
                'isDaytime': false,
                'temperature': 31,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -2.2222222222222223
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 75
                },
                'windSpeed': '8 to 13 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/night/sct?size=medium',
                'shortForecast': 'Partly Cloudy',
                'detailedForecast': 'Partly cloudy, with a low around 31.'
            },
            {
                'number': 8,
                'name': 'Friday',
                'startTime': '2023-03-10T06:00:00-05:00',
                'endTime': '2023-03-10T18:00:00-05:00',
                'isDaytime': true,
                'temperature': 49,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 0
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 75
                },
                'windSpeed': '7 to 12 mph',
                'windDirection': 'E',
                'icon': 'https://api.weather.gov/icons/land/day/bkn/rain?size=medium',
                'shortForecast': 'Mostly Cloudy then Slight Chance Light Rain',
                'detailedForecast': 'A slight chance of rain after 1pm. Mostly cloudy, with a high near 49.'
            },
            {
                'number': 9,
                'name': 'Friday Night',
                'startTime': '2023-03-10T18:00:00-05:00',
                'endTime': '2023-03-11T06:00:00-05:00',
                'isDaytime': false,
                'temperature': 40,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 50
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 3.3333333333333335
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 89
                },
                'windSpeed': '13 mph',
                'windDirection': 'S',
                'icon': 'https://api.weather.gov/icons/land/night/rain,50?size=medium',
                'shortForecast': 'Chance Light Rain',
                'detailedForecast': 'A chance of rain. Mostly cloudy, with a low around 40. Chance of precipitation is 50%.'
            },
            {
                'number': 10,
                'name': 'Saturday',
                'startTime': '2023-03-11T06:00:00-05:00',
                'endTime': '2023-03-11T18:00:00-05:00',
                'isDaytime': true,
                'temperature': 52,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 40
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 3.3333333333333335
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 89
                },
                'windSpeed': '14 to 18 mph',
                'windDirection': 'W',
                'icon': 'https://api.weather.gov/icons/land/day/rain,40/rain,30?size=medium',
                'shortForecast': 'Chance Light Rain',
                'detailedForecast': 'A chance of rain. Partly sunny, with a high near 52. Chance of precipitation is 40%.'
            },
            {
                'number': 11,
                'name': 'Saturday Night',
                'startTime': '2023-03-11T18:00:00-05:00',
                'endTime': '2023-03-12T06:00:00-04:00',
                'isDaytime': false,
                'temperature': 35,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 30
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -1.1111111111111112
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 70
                },
                'windSpeed': '17 mph',
                'windDirection': 'NW',
                'icon': 'https://api.weather.gov/icons/land/night/rain,30/rain?size=medium',
                'shortForecast': 'Chance Light Rain',
                'detailedForecast': 'A chance of rain before 1am. Partly cloudy, with a low around 35. Chance of precipitation is 30%.'
            },
            {
                'number': 12,
                'name': 'Sunday',
                'startTime': '2023-03-12T06:00:00-04:00',
                'endTime': '2023-03-12T18:00:00-04:00',
                'isDaytime': true,
                'temperature': 50,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 30
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': -1.6666666666666667
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 72
                },
                'windSpeed': '15 mph',
                'windDirection': 'NW',
                'icon': 'https://api.weather.gov/icons/land/day/rain/rain,30?size=medium',
                'shortForecast': 'Chance Light Rain',
                'detailedForecast': 'A chance of rain after 8am. Partly sunny, with a high near 50. Chance of precipitation is 30%.'
            },
            {
                'number': 13,
                'name': 'Sunday Night',
                'startTime': '2023-03-12T18:00:00-04:00',
                'endTime': '2023-03-13T06:00:00-04:00',
                'isDaytime': false,
                'temperature': 37,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 30
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 0
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 76
                },
                'windSpeed': '13 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/night/rain,30/rain?size=medium',
                'shortForecast': 'Chance Light Rain',
                'detailedForecast': 'A chance of rain. Mostly cloudy, with a low around 37. Chance of precipitation is 30%.'
            },
            {
                'number': 14,
                'name': 'Monday',
                'startTime': '2023-03-13T06:00:00-04:00',
                'endTime': '2023-03-13T18:00:00-04:00',
                'isDaytime': true,
                'temperature': 47,
                'temperatureUnit': 'F',
                'temperatureTrend': null,
                'probabilityOfPrecipitation': {
                    'unitCode': 'wmoUnit:percent',
                    'value': null
                },
                'dewpoint': {
                    'unitCode': 'wmoUnit:degC',
                    'value': 0
                },
                'relativeHumidity': {
                    'unitCode': 'wmoUnit:percent',
                    'value': 79
                },
                'windSpeed': '12 to 15 mph',
                'windDirection': 'N',
                'icon': 'https://api.weather.gov/icons/land/day/rain?size=medium',
                'shortForecast': 'Slight Chance Light Rain',
                'detailedForecast': 'A slight chance of rain. Mostly cloudy, with a high near 47.'
            }
        ]
    }
} as unknown as ForecastResponse;

export const mockPoints: PointsResponse = {
    '@context': [
        'https://geojson.org/geojson-ld/geojson-context.jsonld',
        {
            '@version': '1.1',
            'wx': 'https://api.weather.gov/ontology#',
            's': 'https://schema.org/',
            'geo': 'http://www.opengis.net/ont/geosparql#',
            'unit': 'http://codes.wmo.int/common/unit/',
            '@vocab': 'https://api.weather.gov/ontology#',
            'geometry': {
                '@id': 's:GeoCoordinates',
                '@type': 'geo:wktLiteral'
            },
            'city': 's:addressLocality',
            'state': 's:addressRegion',
            'distance': {
                '@id': 's:Distance',
                '@type': 's:QuantitativeValue'
            },
            'bearing': {
                '@type': 's:QuantitativeValue'
            },
            'value': {
                '@id': 's:value'
            },
            'unitCode': {
                '@id': 's:unitCode',
                '@type': '@id'
            },
            'forecastOffice': {
                '@type': '@id'
            },
            'forecastGridData': {
                '@type': '@id'
            },
            'publicZone': {
                '@type': '@id'
            },
            'county': {
                '@type': '@id'
            }
        }
    ],
    'id': 'https://api.weather.gov/points/38.8459999,-76.9274',
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [
            -76.9274,
            38.8459999
        ]
    },
    'properties': {
        '@id': 'https://api.weather.gov/points/38.8459999,-76.9274',
        '@type': 'wx:Point',
        'cwa': 'LWX',
        'forecastOffice': 'https://api.weather.gov/offices/LWX',
        'gridId': 'LWX',
        'gridX': 101,
        'gridY': 70,
        'forecast': 'https://api.weather.gov/gridpoints/LWX/101,70/forecast',
        'forecastHourly': 'https://api.weather.gov/gridpoints/LWX/101,70/forecast/hourly',
        'forecastGridData': 'https://api.weather.gov/gridpoints/LWX/101,70',
        'observationStations': 'https://api.weather.gov/gridpoints/LWX/101,70/stations',
        'relativeLocation': {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -76.92252,
                    38.848615
                ]
            },
            'properties': {
                'city': 'Suitland',
                'state': 'MD',
                'distance': {
                    'unitCode': 'wmoUnit:m',
                    'value': 512.98953576715
                },
                'bearing': {
                    'unitCode': 'wmoUnit:degree_(angle)',
                    'value': 235
                }
            }
        },
        'forecastZone': 'https://api.weather.gov/zones/forecast/MDZ013',
        'county': 'https://api.weather.gov/zones/county/MDC033',
        'fireWeatherZone': 'https://api.weather.gov/zones/fire/MDZ013',
        'timeZone': 'America/New_York',
        'radarStation': 'KLWX'
    }
}