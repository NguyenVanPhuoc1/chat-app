import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-secondary pt-6 sm:justify-center sm:pt-0">
            <div className="flex w-full max-w-md flex-col space-y-6 overflow-hidden rounded-lg bg-background p-6
            shadow-md">
                <Link href="/" className="mx-auto w-20">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>

                {children}

            </div>

        </div>
    );
}
