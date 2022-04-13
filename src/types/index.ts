import React from 'react';

export interface Props {
    visible: Boolean;
    closeModal: () => void;
    onOk?: () => void;
    children?: React.ReactNode;
    title?: string | React.ReactNode;
    footer?: Array<React.ReactNode>
}