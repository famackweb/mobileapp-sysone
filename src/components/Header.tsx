import { ReactNode } from 'react';
import { createBox } from '@shopify/restyle';
import { ThemeProps } from '~/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { TextComponent } from 'src/components/Text';
import { View } from 'react-native';



const Header = createBox<ThemeProps>()

interface Props {
    hasBackButton: boolean;
    hasIcon: boolean;
    title: string;
    icon?: ReactNode;
    background: keyof ThemeProps['colors'];

}


export function HeaderComponent({ hasBackButton = false, hasIcon = false, icon = <MaterialIcons name='help-center' />, title = 'titulo', background = 'shape' }: Props) {
    return (
        <Header height={50} bg={background} justifyContent='space-between' alignItems='center' flexDirection='row' paddingHorizontal={'m'}>
            <View>
                {hasBackButton && (
                    <MaterialIcons name="chevron-left" size={40} />
                )}
            </View>
            <View >
                <TextComponent variant='heading5'>{title}</TextComponent>
            </View>
            <View>
                {hasIcon && icon}
            </View>
        </Header>
    )
}