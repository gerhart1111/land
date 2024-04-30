"use client"
import React, { useEffect, useRef, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { LocationInterface } from '../Profile/types';
import { Paper } from '@mui/material';
import PoweredByGoogle from '../../assets/images/powered_by_google_on_white.png';
import TextFieldWrapper from '../TextFieldWrapper';
import { initLocation } from '../Profile/profileSlice';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { useStyles } from './styles';

export const AutocompleteGooglePlaces = ({
  name,
  control,
  location = initLocation,
  required = true,
  updateLocation,
  className,
  placeholder,
  disablePortal = true,
  popupIndicator = true,
  placeType,
  profileAddress = false,
  error,
}: {
  name: any;
  control: any;
  location?: LocationInterface;
  required?: boolean;
  updateLocation: (newValue: LocationInterface) => void;
  className?: any;
  placeholder?: string;
  disablePortal?: boolean;
  popupIndicator?: boolean;
  placeType?: string;
  profileAddress? : boolean
  error?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<any | null>(null);
  const [placeId, setPlaceId] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<any[]>([]);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  const classes = useStyles({ isOpen, popupIndicator });

  const fetchData = React.useMemo(
    () =>
      throttle(
        (
          request: {
            input: string;
            //componentRestrictions: { country: string[] };
            types?: string[];
          },
          callback: (results?: any[]) => void,
        ) => {
          (autocompleteService.current as any).getPlacePredictions(request, callback);
        },
        200,
      ),
    [],
  );

  const fetchDetails = React.useMemo(
    () =>
      throttle((request: { placeId: string; fields: string[] }, callback: (results?: any) => void) => {
        (placesService.current as any).getDetails(request, callback);
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      updateLocation(initLocation);
      return undefined;
    }

    fetchData(
      {
        input: inputValue,
        //componentRestrictions: { country: ['us', 'il'] },
        types: profileAddress === true ? ['address'] : ['locality', 'administrative_area_level_1'] 
      },
      (results?: any[]) => {
        if (active) {
          let newOptions = [] as any[];

          // if (value) {
          //   newOptions = [value];
          // }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        }
      },
    );
    return () => {
      active = false;
    };
  }, [value, inputValue, fetchData]);

  useEffect(() => {
    if (!placesService.current && (window as any).google) {
      placesService.current = new (window as any).google.maps.places.PlacesService(document.createElement('div'));
    }
    if (!placesService.current) {
      return undefined;
    }

    if (placeId) {
      fetchDetails({ placeId: placeId, fields: ['address_components', 'geometry'] }, (results: any) => {
        if (results) {

          const { address_components, geometry } = results;
          const newLocation = {
            address: value,
            placeId: placeId,
            street: '',
            zip: '',
            city: '',
            state: '',
            country: '',
            lat: `${geometry.location.lat()}`,
            lng: `${geometry.location.lng()}`,
          };
          let postcode = '';
          for (const component of address_components as google.maps.GeocoderAddressComponent[]) {
            const componentType = component.types[0];

            switch (componentType) {
              case 'route': {
                newLocation.street = component.long_name;
                break;
              }

              case 'postal_code': {
                postcode = `${component.long_name}`;
                newLocation.zip = component.long_name;
                break;
              }

              case 'postal_code_suffix': {
                newLocation.zip = `${postcode}-${component.long_name}`;
                break;
              }

              case 'locality':
                newLocation.city = component.long_name;
                break;

              case 'administrative_area_level_1': {
                newLocation.state = component.long_name;
                break;
              }

              case 'country':
                newLocation.country = component.long_name;
                break;
            }
          }
          updateLocation(newLocation);
        }
      });
    }
  }, [placeId]);

  const renderOption = (option: any) => {
    const matches = option?.structured_formatting?.main_text_matched_substrings;
    const parts =
      matches && matches.length > 0
        ? parse(
            option.structured_formatting.main_text,
            matches.map((match: any) => [match.offset, match.offset + match.length]),
          )
        : option.structured_formatting.main_text;
    return (
      <Grid container alignItems="center">
        <Grid item xs>
          {parts.map((part:any, index:any) => (
            <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
              {part.text}
            </span>
          ))}
          {option.structured_formatting.secondary_text ? `, ${option.structured_formatting.secondary_text}` : null}
        </Grid>
      </Grid>
    );
  };

  let autocompleteClassName = className ? className : classes.autocomplete;
  if (error) {
    autocompleteClassName += ` ${classes.autocompleteError}`;
  }

  return (
    <Controller
      render={({ field: { onChange, onBlur, ref, value } }) => (
        <Autocomplete
          ref={ref}
          getOptionLabel={option => (typeof option === 'string' ? option : option?.description)}
          isOptionEqualToValue={(option, value) =>
            option.description === (typeof value === 'string' ? value : value?.description)
          }
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          disablePortal={disablePortal}
          filterOptions={x => x}
          options={options}
          className={autocompleteClassName}
          classes={{
            popupIndicator: classes.popupIndicator,
          }}
          includeInputInList
          filterSelectedOptions
          value={value}
          onChange={(event: any, newValue: any | null) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue?.description);
            onChange(newValue?.description);
            setPlaceId(newValue ? newValue.place_id : null);
          }}
          onBlur={onBlur}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue as string);
          }}
          PaperComponent={({ children }) => (
            <>
              <Paper className={classes.listbox}>
                <>
                {children}
                <div style={{ width: '100%', textAlign: 'end' }}>
                  <Image src={PoweredByGoogle} height={10} style={{ marginRight: 5 }} alt='google' />
                </div>
                </>
              </Paper>
            </>
          )}
          renderInput={params => <TextFieldWrapper placeholder={placeholder} {...params} />}
          renderOption={renderOption}
        />
      )}
      name={name}
      control={control}
      rules={{ required: required }}
    />
  );
};
