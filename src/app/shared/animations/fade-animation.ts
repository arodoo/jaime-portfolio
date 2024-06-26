import { animate, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
    ])
]);
