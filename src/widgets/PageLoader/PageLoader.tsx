import { classNames } from 'shared/lib/classNames';
import './PageLoader.scss';

export const PageLoader = () => (
    <div className={classNames('page-loader')}>
        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
