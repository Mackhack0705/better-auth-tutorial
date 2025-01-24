import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-3 px-4 top-0 left-0 right-0 z-50 bg-slate-100">
            <div className="text-xl font-bold">
                <Link href="/">Better-Auth</Link>
            </div>
            <div className="flex gap-2 justify-center">
                <Link href="/sign-in">
                    <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </nav>
    );
};
