"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Ticket, CreditCard, Shield } from "lucide-react"

interface TicketIntegrationProps {
  ticketUrl: string
  eventTitle: string
  eventDate: string
  status: "available" | "selling-fast" | "sold-out"
}

export function TicketIntegration({ ticketUrl, eventTitle, eventDate, status }: TicketIntegrationProps) {
  return (
    <div className="bg-black border-2 border-primary rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Ticket className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-bold text-white">Get Your Tickets</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3 text-sm text-gray-400">
          <CreditCard className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p>Secure payment via CM Tickets - trusted by thousands of event-goers</p>
        </div>
        <div className="flex items-start gap-3 text-sm text-gray-400">
          <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p>Instant confirmation and e-tickets delivered to your email</p>
        </div>
      </div>

      {status === "available" && (
        <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-6">
            BUY TICKETS ON CM TICKETS
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </a>
      )}

      {status === "selling-fast" && (
        <>
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3 mb-4">
            <p className="text-yellow-400 text-sm font-bold text-center">⚡ SELLING FAST - Limited tickets remaining</p>
          </div>
          <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-6 animate-pulse">
              BUY TICKETS NOW
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </>
      )}

      {status === "sold-out" && (
        <Button disabled className="w-full bg-gray-700 text-gray-400 font-bold text-lg py-6 cursor-not-allowed">
          SOLD OUT
        </Button>
      )}

      <p className="text-gray-500 text-xs text-center mt-4">
        Powered by CM Tickets - Official ticketing partner of HAKborrel
      </p>
    </div>
  )
}
