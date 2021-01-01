import React, {useState} from 'react'
import TokenSendForm from '../../components/forms/TokenSendForm'
import {Container} from "@material-ui/core";


export default function SendToken() {
    return (
        <Container>
            <TokenSendForm />
        </Container>
    )
}
