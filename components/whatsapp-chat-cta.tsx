'use client'

import { useState } from 'react'
import { MessageSquare, XIcon } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'

const contacts = [
  { phone: '+263774987995', label: '+263 77 498 7995' },
  { phone: '+263713624817', label: '+263 71 362 4817' },
  { phone: '+263789606210', label: '+263 78 960 6210' },
]

function formatWhatsAppLink(phone: string) {
  return `https://wa.me/${phone.replace(/[^0-9]/g, '')}`
}

export function WhatsAppChatCta() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog modal={false} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-charcoal shadow-[0_20px_60px_rgba(212,175,55,0.25)] transition-colors hover:bg-deep-gold focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={open ? 'Close chat options' : 'Open WhatsApp chat options'}
        >
          {open ? (
            <XIcon className="h-4 w-4" />
          ) : (
            <MessageSquare className="h-4 w-4" />
          )}

          {open ? 'Close' : 'Chat'}
        </Button>
      </DialogTrigger>

      <DialogContent
        showOverlay={false}
        className="
          fixed
          bottom-24
          right-6
          left-auto
          top-auto
          translate-x-0
          translate-y-0
          z-50
          w-[min(20rem,calc(100vw-2rem))]
          rounded-[28px]
          border
          border-gold/30
          bg-charcoal/95
          p-6
          shadow-2xl
          shadow-black/40
        "
      >
        <DialogHeader className="text-center sm:text-left">
          <DialogTitle>Chat on WhatsApp</DialogTitle>

          <DialogDescription>
            Choose a number below to open a direct WhatsApp chat.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-3">
          {contacts.map((contact) => (
            <Button
              asChild
              key={contact.phone}
              variant="secondary"
              className="w-full justify-between border border-gold/30 bg-charcoal/80 px-4 text-left text-ivory hover:border-gold/50 hover:bg-charcoal/90"
            >
              <a
                href={formatWhatsAppLink(contact.phone)}
                target="_blank"
                rel="noreferrer"
              >
                <span>{contact.label}</span>

                <span className="text-xs text-gold/70">
                  Open in WhatsApp
                </span>
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}