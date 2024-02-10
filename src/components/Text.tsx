import { TextProps, createText } from "@shopify/restyle";
import { ThemeProps, theme } from "~/theme";

const Text = createText<ThemeProps>();

interface Props extends TextProps<typeof theme> {
    children: string;
}
/**
 * Component to make easier the creation of screens in all app.
 * @prop children - Children here is your text.
 * @prop TextProps - You can use all Text properties from shopify/restyle
 */
export function TextComponent({ children, ...PropsText }: Props) {
    return (
        <Text {...PropsText}>
            {children}
        </Text>
    );
}