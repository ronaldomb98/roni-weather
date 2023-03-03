import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { OneLineAddressResponse } from '../entities';

export function useOneLineAddress(address: string) {
    const urlObj = new URL(`${process.env.GEOCODING}/geocoder/locations/onelineaddress`);
    urlObj.searchParams.append('address', address);
    urlObj.searchParams.append('format', 'json');
    urlObj.searchParams.append('benchmark', '2020');

    const url = urlObj.toString();

    return useQuery({
        queryKey: ['onelineaddress', url],
        queryFn: () => axios.get<OneLineAddressResponse>(url)
            .then(res => res.data),
        enabled: address.length > 0
    })
}