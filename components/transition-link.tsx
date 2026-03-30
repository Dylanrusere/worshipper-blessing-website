"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePreloader } from "@/lib/context/preloader-context"
import React from "react"

interface TransitionLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    children: React.ReactNode
    href: string
    className?: string
}

export function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
    const router = useRouter()
    const { startTransition } = usePreloader()

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        // Only handle internal links
        if (href.startsWith('/') && !href.startsWith('//')) {
            startTransition(href, () => {
                router.push(href)
            })
        } else {
            window.location.href = href
        }
    }

    return (
        <Link
            {...props}
            href={href}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    )
}
