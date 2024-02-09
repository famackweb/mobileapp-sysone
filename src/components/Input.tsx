import React from 'react';
import { createBox } from '@shopify/restyle';
import { ThemeProps } from "~/theme";
import { TextComponent } from './Text';
import { TextInput, TextInputProps } from 'react-native';


const Box = createBox<ThemeProps>();

interface InputProps extends TextInputProps {
    label?: string;
    hasLabel?: boolean;
}

export function Input({ hasLabel = false, label = '', ...InputProps }: InputProps) {
    return (<Box>
        <Box marginBottom='s'>
            {(hasLabel || label !== '') &&
                <TextComponent variant='heading4'>
                    {label}
                </TextComponent>
            }
        </Box>
        <Box>
            <TextInput style={{
                height: 50,
                backgroundColor: '#EEF0F3',
                borderRadius: 16,
                paddingLeft: 10
            }} {...InputProps} />
        </Box>
    </Box>);
}
