import { createBox } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemeProps } from "~/theme";
import { TextComponent } from "./Text";

const Box = createBox<ThemeProps>();

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title = 'Entrar', ...TouchableProps }: ButtonProps) {
    return (
        <TouchableOpacity style={{ height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#5784E8', borderRadius: 16 }}{...TouchableProps}>
            <TextComponent variant="heading5" color="shape_dark">{title}</TextComponent>
        </TouchableOpacity>
    )
}