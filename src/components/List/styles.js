import styled from "styled-components";

export const List = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: #333;
    justify-content: space-between;

    .trash {
        cursor: pointer;
    }

    .trash:hover {
        color: #ccc;
    }
`

export const ListItem = styled.li`
    list-style: none;
    color: #fff;
    overflow-wrap: break-word;
    max-width: 1000px;
    text-align: center;
`