import { Outlet } from "react-router-dom";
import { LayoutContainer, MainProfile } from "./styles";
import { Header } from "../../components/Header";

export function DefaultLayout () {
    return (
        <LayoutContainer>
            <Header />
            <MainProfile>
                <Outlet />
            </MainProfile>
        </LayoutContainer>
    )
}