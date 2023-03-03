import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GeocodingForm } from '@modules/Geocoding/components/GeocodingForm/GeocodingForm';
import { useOneLineAddress } from '@modules/Geocoding/hooks/useOneLineAddress';
import { GeocodingState, AddressMatch } from '@modules/Geocoding/entities';

import styles from './styles.scss';


interface GeocodingProps {
    onChangeCoordinates: (coordinates: AddressMatch[]) => void;
}

export function Geocoding(props: GeocodingProps) {
    const { onChangeCoordinates } = props;
    const form = useForm<GeocodingState>({
        defaultValues: {
            address: ''
        },
    });
    const [geocoding, setGeocoding] = useState<GeocodingState>(
        form.formState.defaultValues as GeocodingState
    );
    const { data, isLoading, isError } = useOneLineAddress(geocoding.address);

    useEffect(() => {
        if (isLoading || isError) {
            onChangeCoordinates([]);
        }

        if (data) {
            onChangeCoordinates(data.result.addressMatches);
        }
    }, [data, isLoading, isError]);

    return <>
        <GeocodingForm form={form} onSubmit={setGeocoding} />
        {
            data && !data.result.addressMatches.length &&
            <div className={styles.geocoding__warningMessage}>
                No matches found for <strong>{data.result.input.address.address}</strong>
            </div>
        }
        {
            !isError && isLoading && !data && geocoding.address.length &&
            <div className={styles.geocoding__warningMessage}>
                Loading...
            </div>
        }
        {
            isError && 
            <div>Something went wrong</div>
        }
    </>
}