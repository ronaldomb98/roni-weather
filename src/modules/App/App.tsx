import React, { useState } from 'react'
import { HttpProvider } from '@modules/Http'
import { Geocoding } from '@modules/Geocoding'
import { AddressMatch } from '@modules/Geocoding/entities'
import { Weather } from '@modules/Weather'

export function AppProd() {
  const [matches, setMatches] = useState<AddressMatch[]>([])

  return <HttpProvider>
    <>
      <Geocoding onChangeCoordinates={setMatches} />
      {
        matches.map(match => (
          <Weather
            key={`${match.coordinates.y}-${match.coordinates.x}`}
            latitude={match.coordinates.y}
            longitude={match.coordinates.x}
          />
        ))
      }
    </>
  </HttpProvider>
}
