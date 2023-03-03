import { Period } from '@modules/Weather/entities';
import { useForecast } from '@modules/Weather/hooks/useForecast';
import React, { useEffect, useState } from 'react';

import styles from './styles.scss';

interface WeatherProps {
    latitude: number;
    longitude: number;
}

export function Weather(props: WeatherProps) {
    const { latitude, longitude } = props;
    const { data } = useForecast(latitude, longitude);
    const [periods, setPeriods] = useState<Array<Period[]>>([]);

    useEffect(() => {
        if (data){
            setPeriods(data.properties.periods.reduce((newPeriods, period) => {
                if (!newPeriods.length || period.isDaytime) {
                    newPeriods.push([period])
                    return newPeriods;
                }

                newPeriods[newPeriods.length - 1].push(period)
                return newPeriods
            }, [] as Array<Period[]>))
        }
    }, [data]);

    return (
        <section className={styles.weather}>
            {
                periods.map((period) => (
                    <div key={`day-${period[0].name}`} className={styles.weather__card}>
                        {
                            period.map(time => (
                                <div key={`time-${time.name}`}>
                                    <div className={styles.weather__header}>
                                        <h3 className={styles.weather__time}>
                                            {time.name}
                                        </h3>
                                    </div>
                                    <div className={styles.weather__body}>
                                        <img className={styles.weather__icon} src={time.icon} alt={time.name} />
                                        <ul>
                                            <li>Humidity: {time.relativeHumidity.value}%</li>
                                            <li>Temperature: {time.temperature} {time.temperatureUnit}</li>
                                            <li>Wind Speed: {time.windSpeed} {time.windDirection}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}