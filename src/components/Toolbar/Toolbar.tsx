import React from 'react';

interface styleTextAlign {
    textAlign: string
}

interface styleTextDecoration {
    textDecoration: string
}

interface styleFontWeight {
    fontWeight: string
}

interface styleFontStyle {
    fontStyle: string
}

export interface IButtons {
    icon: string;
    active: boolean;
    value: styleTextAlign | styleTextDecoration | styleFontWeight | styleFontStyle

}

const Toolbar = () => {
    const state: any = [];
    const buttons: IButtons[] = [
        {
            icon: 'format_align_left',
            active: state['textAlign'] === 'left',
            value: {textAlign: 'left'}
        },
        {
            icon: 'format_align_center',
            active: state['textAlign'] === 'center',
            value: {textAlign: 'center'}
        },
        {
            icon: 'format_align_right',
            active: state['textAlign'] === 'right',
            value: {textAlign: 'right'}
        },
        {
            icon: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
        },
        {
            icon: 'format_italic',
            active: state['fontStyle'] === 'italic',
            value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
        },
        {
            icon: 'format_underlined',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
        }
    ]
    return (
        <div>
            
        </div>
    );
};

export default Toolbar;