import React, { useCallback, FormEvent } from 'react'
import { Controller, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { GeocodingState } from '../../entities';

import styles from './styles.scss';

interface GeocodingFormProps {
    form: UseFormReturn<GeocodingState, any>;
    onSubmit: (data: GeocodingState) => void
}

export function GeocodingForm(props: GeocodingFormProps) {
    const { form, onSubmit } = props;
    const { handleSubmit, control, formState } = form;

    return (
        <section className={styles.geocodingForm}>
            <h2>Geocoding</h2>
            <form
                className={styles.geocodingForm__form}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name="address"
                    rules={{
                        required: true
                    }}
                    render={({ field }) => (
                        <div className={styles.geocodingForm__control}>
                            <label htmlFor="address" className={styles.geocodingForm__label}>
                                <strong>Address</strong>
                                <input {...field} name="address" id="address" placeholder="4600 Silver Hill Rd, Washington, DC 20233" className={styles.geocodingForm__address} />
                            </label>
                            <small>Format: street, city, state, zip</small>
                        </div>
                    )}
                />
                
                <button disabled={!formState.isValid} type="submit">
                    Search
                </button>
            </form>
        </section>
    )
}