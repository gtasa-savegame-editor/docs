import * as React from 'react';
import {FunctionComponent, Suspense} from 'react';
import {useParams} from "react-router-dom";

type Props = {}

const BlockRoute: FunctionComponent<Props> = () => {

    const {id} = useParams();

    const Block00 = React.lazy(() => import('./content/blocks/00'));
    const Block01 = React.lazy(() => import('./content/blocks/01'));
    const Block02 = React.lazy(() => import('./content/blocks/02'));
    const Block03 = React.lazy(() => import('./content/blocks/03'));
    const Block04 = React.lazy(() => import('./content/blocks/04'));
    const Block05 = React.lazy(() => import('./content/blocks/05'));
    const Block06 = React.lazy(() => import('./content/blocks/06'));
    const Block08 = React.lazy(() => import('./content/blocks/08'));
    const Block09 = React.lazy(() => import('./content/blocks/09'));
    const Block10 = React.lazy(() => import('./content/blocks/10'));
    const Block11 = React.lazy(() => import('./content/blocks/11'));
    const Block12 = React.lazy(() => import('./content/blocks/12'));
    const Block15 = React.lazy(() => import('./content/blocks/15'));
    const Block16 = React.lazy(() => import('./content/blocks/16'));
    const Block17 = React.lazy(() => import('./content/blocks/17'));
    const Block18 = React.lazy(() => import('./content/blocks/18'));
    const Block19 = React.lazy(() => import('./content/blocks/19'));
    const Block20 = React.lazy(() => import('./content/blocks/20'));
    const Block21 = React.lazy(() => import('./content/blocks/21'));
    const Block22 = React.lazy(() => import('./content/blocks/22'));
    const Block23 = React.lazy(() => import('./content/blocks/23'));
    const Block24 = React.lazy(() => import('./content/blocks/24'));
    const Block25 = React.lazy(() => import('./content/blocks/25'));
    const Block26 = React.lazy(() => import('./content/blocks/26'));
    const Block27 = React.lazy(() => import('./content/blocks/27'));
    const Block30 = React.lazy(() => import('./content/blocks/30'));

    switch (id) {
        case '00':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block00/>
                </Suspense>
            );
        case '01':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block01/>
                </Suspense>
            );
        case '02':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block02/>
                </Suspense>
            );
        case '03':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block03/>
                </Suspense>
            );
        case '04':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block04/>
                </Suspense>
            );
        case '05':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block05/>
                </Suspense>
            );
        case '06':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block06/>
                </Suspense>
            );
        case '08':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block08/>
                </Suspense>
            );
        case '09':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block09/>
                </Suspense>
            );
        case '10':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block10/>
                </Suspense>
            );
        case '11':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block11/>
                </Suspense>
            );
        case '12':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block12/>
                </Suspense>
            );
        case '15':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block15/>
                </Suspense>
            );
        case '16':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block16/>
                </Suspense>
            );
        case '17':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block17/>
                </Suspense>
            );
        case '18':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block18/>
                </Suspense>
            );
        case '19':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block19/>
                </Suspense>
            );
        case '20':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block20/>
                </Suspense>
            );
        case '21':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block21/>
                </Suspense>
            );
        case '22':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block22/>
                </Suspense>
            );
        case '23':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block23/>
                </Suspense>
            );
        case '24':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block24/>
                </Suspense>
            );
        case '25':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block25/>
                </Suspense>
            );
        case '26':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block26/>
                </Suspense>
            );
        case '27':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block27/>
                </Suspense>
            );
        case '30':
            return (
                <Suspense fallback={<p className={'loader'}>Loading...</p>}>
                    <Block30/>
                </Suspense>
            );
    }
}

export default BlockRoute;
