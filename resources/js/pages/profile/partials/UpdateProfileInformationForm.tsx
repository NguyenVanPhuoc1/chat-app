import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler, useRef } from 'react';
import { MdAddAPhoto } from "react-icons/md";
import { UpdateProfileSchema, User } from '@/types/user';

export default function UpdateProfileInformation({
    user,
    mustVerifyEmail,
    status,
    className = '',
}: {
    user: User;
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    // const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm<UpdateProfileSchema>({
            _method: "PATCH",
            name: user.name,
            email: user.email,
            avatar : null,
        });
    const avatarRef = useRef<HTMLImageElement>(null);
    // change avatar
    const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files && files.length > 0){
            setData('avatar', files[0]);
            //tạo xử lí trên front end
            const imageUrl = window.URL.createObjectURL(files[0]);
            //set avatar
            avatarRef.current?.setAttribute('src', imageUrl);

            return () => {
                //hủy
                window.URL.revokeObjectURL(imageUrl);
            }
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-foreground">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-secondary-foreground">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    {/* avater */}
                    <div className='picture relative'>
                        <img src={user.avatar} alt={user.name} className='mx-auto h-20 w-20 rounded-full border
                        border-secondary' ref={avatarRef}/>
                        <label htmlFor="avatar" className='p-2 btn btn-primary absolute rounded-full left-1/2 top-12 flex translate-x-5'>
                            <MdAddAPhoto />
                            <input type="file" onChange={changeAvatar} id="avatar" className='hidden' />
                        </label>
                    </div>
                    <div>

                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    </div>


                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
