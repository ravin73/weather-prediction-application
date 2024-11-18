import { cn } from '@/utils/cn';
import Image from 'next/image';
import * as React from 'react';

type Props = {}
export default function WeatherIcon (props: React.HTMLProps<HTMLDivElement> & { iconName: string }) {
    return (
        <div title={props.iconName} {...props}
            className={cn('relative h-20 w-20')}>
            <Image
                src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
                alt="Weather Icon"
                width={100}
                height={100}
                className='w-full h-full absolute'
            />
        </div>
    );
}
