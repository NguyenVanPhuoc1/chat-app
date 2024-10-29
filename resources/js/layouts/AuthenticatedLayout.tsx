import ApplicationLogo from '@/components/ApplicationLogo';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink from '@/components/ResponsiveNavLink';
import { User } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';

export default function Authenticated({
    //định nghĩa props để truyền data thoogn qua các component
    user,
    header,
    children,
}: PropsWithChildren<{user: User,  header?: ReactNode }>) {
    // const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-secondary">
            <nav className="border-b border-secondary bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex w-full gap-4">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto " />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('chats.index')}
                                    active={false}
                                >
                                    Chats
                                </NavLink>
                            </div>
                        </div>

                        <div className="ml-auto flex items-center">
                            <Link href={route('logout')} as="button" method="post"
                            className='btn btn-secondary whitespace-nowrap flex items-center gap-2 border-none'>
                                <BsBoxArrowRight /> Logout
                            </Link>
                        </div>
                    </div>
                </div>

                
            </nav>

            {header && (
                <header className="bg-secondary shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
