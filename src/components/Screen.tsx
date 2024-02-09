import { createBox, BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { ThemeProps, theme } from 'src/theme'
import { HeaderComponent } from './Header';
import { SafeAreaView } from 'react-native';

const Screen = createBox<ThemeProps>();
const Box = createBox<ThemeProps>();

interface ScreenComponentProps extends BoxProps<typeof theme> {
    children: ReactNode
    hasHeader?: boolean
}


/**
 * Component to make easier the creation of screens in all app.
 * @prop children - Children is all you want to compose you screen.
 * @prop layoutProps - You can use all layout properties from shopify/restyle
 */
export function ScreenComponent({ children, hasHeader = true, ...layoutProps }: ScreenComponentProps) {
    return (
        <Screen flex={1} bg={'shape'}  {...layoutProps} >
            <SafeAreaView >

                {hasHeader && (

                    <HeaderComponent background='red' hasIcon={false} title='Login' hasBackButton={true} />
                )}
                {children}
            </SafeAreaView>
        </Screen>
    )
}