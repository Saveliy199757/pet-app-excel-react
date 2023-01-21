import React from 'react';
import Button from "./components/Button";

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
            active: /*state['textAlign'] === 'left'*/ false,
            value: {textAlign: 'left'}
        },
        {
            icon: 'format_align_center',
            active: false /*state['textAlign'] === 'center'*/,
            value: {textAlign: 'center'}
        },
        {
            icon: 'format_align_right',
            active: /*state['textAlign'] === 'right'*/ false,
            value: {textAlign: 'right'}
        },
        {
            icon: 'format_bold',
            active: /*state['fontWeight'] === 'bold'*/ false,
            value: {fontWeight: /*state['fontWeight'] === 'bold' ? 'normal' :*/ 'bold'}
        },
        {
            icon: 'format_italic',
            active: /*state['fontStyle'] === 'italic'*/ false,
            value: {fontStyle: /*state['fontStyle'] === 'italic' ? 'normal' :*/ 'italic'}
        },
        {
            icon: 'format_underlined',
            active: /*state['textDecoration'] === 'underline'*/ false,
            value: {textDecoration: /*state['textDecoration'] === 'underline' ? 'none' :*/ 'underline'}
        }
    ]
    return (
        <div className="excel__toolbar">
            {buttons.map(button => <Button icon={button.icon} active={button.active} value={button.value}/>)}
        </div>
    );
};

export default Toolbar;