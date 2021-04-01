import { MouseEventHandler } from 'react';
import { State } from '../types';
export declare const DotsNavigation: ({ state, onClick, onMouseEnter, onMouseLeave, renderDotsItem }: Props) => JSX.Element;
declare type Props = {
    state: State;
    onClick: (index: number) => void;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    renderDotsItem?: ({ isActive, activeIndex }: {
        isActive: any;
        activeIndex: any;
    }) => any;
};
export {};
