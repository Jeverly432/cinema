import { classNames } from 'shared/lib/classNames';
import './Loader.scss';
import { LoaderProps } from './types';

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
