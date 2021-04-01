import { Props, State } from '../types';
export declare function shouldDisableDots(props: Props, state: State): boolean;
export declare const getDotsNavigationLength: (itemsCount: number | undefined, itemsInSlide: number | undefined, autoWidth: any) => number;
export declare const checkIsTheLastDotIndex: (index: number, infinite: boolean, dotsLength: number) => boolean;
export declare const getItemIndexForDotNavigation: (index: number, isTheLastIndex: boolean, slidesLength: number, itemsInSlide: number) => number;
export declare const shouldCancelAutoPlayOnAction: (strategy?: string) => boolean;
export declare const shouldCancelAutoPlayOnHover: (strategy?: string) => boolean;
