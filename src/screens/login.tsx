import { createBox, } from "@shopify/restyle";
import { Image, TextInput, View } from "react-native";
import { ScreenComponent } from "~/components/Screen";
import { ThemeProps } from "~/theme";

import tempLogo from 'assets/icon.png'
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";

const Box = createBox<ThemeProps>();

export function Login() {
    return (
        <ScreenComponent hasHeader={false} paddingHorizontal="xl">
            <Box id="logo-container" width={"auto"} alignItems="center" marginTop="xxxl">
                <Image source={tempLogo} style={{ height: 200, width: 200 }} />
            </Box>

            <Box id="inputContainer" marginTop="xl">
                <Input label="Teste" placeholder="Insira seu email" />
            </Box>

            <Box id="buttonContainer" marginTop="m">
                <Button title="Entrar" />
            </Box>
        </ScreenComponent>
    )
}
