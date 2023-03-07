import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockEmptyOneLineAddress, mockOneLineAddress } from '@modules/Geocoding/mocks';
import { mockForecast, mockPoints } from '@modules/Weather';
import { AppProd } from './App';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });

describe('AppProd', () => {
    let urlGeocoding: URL;
    let urlEmptyGeocoding: URL;
    let urlErrorGeocoding: URL;
    let urlPoints: string;

    beforeEach(() => {
        mock.reset();
        urlGeocoding = new URL(`${process.env.GEOCODING}/geocoder/locations/onelineaddress`);
        urlGeocoding.searchParams.append('address', 'Example')        
        urlGeocoding.searchParams.append('format', 'json');
        urlGeocoding.searchParams.append('benchmark', '2020');
        urlPoints = `${process.env.WEATHER}/points/${mockOneLineAddress.result.addressMatches[0].coordinates.y},${mockOneLineAddress.result.addressMatches[0].coordinates.x}`;
        urlEmptyGeocoding = new URL(urlGeocoding);
        urlEmptyGeocoding.searchParams.set('address', 'Empty')
        urlErrorGeocoding = new URL(urlGeocoding);
        urlErrorGeocoding.searchParams.set('address', 'Error')

        mock.onGet(urlGeocoding.toString()).replyOnce(200, mockOneLineAddress);
        mock.onGet(urlEmptyGeocoding.toString()).replyOnce(200, mockEmptyOneLineAddress);
        mock.onGet(urlErrorGeocoding.toString()).replyOnce(400);
        mock.onGet(urlPoints).replyOnce(200, mockPoints);
        mock.onGet(mockPoints.properties.forecast).replyOnce(200, mockForecast);
    })
    it('should provide simple layout', async () => {
        render(<AppProd />)
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Example' } });
        
        await waitFor(() => {
            expect(screen.getByRole('button')).toBeEnabled();
        })

        const search = screen.getByRole('button');
        
        fireEvent.click(search)

        await waitFor(() => {
            expect(screen.getByText('Loading...'))
        })

        await waitFor(() => {
            mockForecast.properties.periods.forEach((period) => {
                expect(screen.getByText(period.name))
            })
        })
    })

    it('should notify when there are not match', async () => {
        render(<AppProd />)
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Empty' } });
        
        await waitFor(() => {
            expect(screen.getByRole('button')).toBeEnabled();
        })

        const search = screen.getByRole('button');
        
        fireEvent.click(search)

        await waitFor(() => {
            expect(screen.getByText('Loading...'))
        })

        await waitFor(() => {
            expect(screen.getByText('No matches found for'))
        })
        await waitFor(() => {
            expect(screen.getByText('Empty'));
        })
    })

    it('should notify when there are not match', async () => {
        render(<AppProd />)
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Error' } });
        
        await waitFor(() => {
            expect(screen.getByRole('button')).toBeEnabled();
        })

        const search = screen.getByRole('button');
        
        fireEvent.click(search)

        await waitFor(() => {
            expect(screen.getByText('Loading...'))
        })

        await waitFor(() => {
            expect(screen.getByText('Something went wrong'))
        })
    })
})
