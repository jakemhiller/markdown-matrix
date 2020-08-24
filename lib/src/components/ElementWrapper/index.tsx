import React from 'react';
import { config } from '../../helpers/config';

export type ElementWrapperProps = {
    content: string;
};

export const ElementWrapper: React.FC<ElementWrapperProps> = ({ children, content, ...props }) => {
    const wrapper = config.wrapper;

    if (wrapper) {
        return React.createElement(wrapper, { ...props, content }, children)
    }

    // default wrapper is just a span
    return(
        <span {...props}>{children}</span>
    );
};