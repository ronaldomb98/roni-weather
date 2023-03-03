import { ForecastProperties, ForecastResponse, PointsResponse } from '@modules/Weather/entities';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useForecast(latitude: number, longitude: number) {
    const url = `${process.env.WEATHER}/points/${latitude},${longitude}`;
    
    return useQuery({
        queryKey: [url],
        queryFn: () => axios.get<PointsResponse>(url)
            .then(response => response.data)
            .then(data => axios.get<ForecastResponse>(data.properties.forecast))
            .then(response => response.data)
    })
}