/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {Message} from 'semantic-ui-react';
import MessageHeader from 'semantic-ui-react/dist/commonjs/collections/Message/MessageHeader';


const ConfirmEmailMessage = () => (
    <Message info>
        <MessageHeader>Please, verify your email to unlock awesomness</MessageHeader>
    </Message>
);

export default ConfirmEmailMessage;