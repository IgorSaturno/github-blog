import styled from "styled-components";

export const PostContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;

    h1, h2, h3 {
        color: ${(props) => props.theme.colors["brand-blue"]};
    }

    pre {
        background: ${(props) => props.theme.colors["base-post"]};
        padding: 1rem;

        >div {
            background: none !important;
            padding: 0!important;
            margin: 0!important;

            code {
                font-family: 'FiraCode', monospace !important;
                line-height: 160% !important;
            }
        }
    }
`;